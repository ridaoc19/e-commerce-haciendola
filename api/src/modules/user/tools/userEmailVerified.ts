import { Request, Response } from "express";
import { sendEmail } from "../../../core/utils/email";
import { errorHandlerCatch } from "../../../core/utils/send/errorHandler";
import { AppDataSource } from "../../../data-source";
import UserEntity from "../entity";

function stopExecutionTemporarily() {
  return new Promise(resolve => {
    setTimeout(resolve, 5 * 60 * 1000); 
  });
}

export async function userEmailVerified({ user_id, newEmail, res, req }: { user_id: string, newEmail: string, res: Response, req: Request }) {
  const userRepository = AppDataSource.getRepository(UserEntity);

  try {
    await stopExecutionTemporarily();
    
    const userDBOne = await userRepository.findOne({ where: { user_id } })

    if (!userDBOne) throw new Error(`se presento un inconveniente al solicitar información del usuario`)

    if (userDBOne?.email !== newEmail) {
      const responseEmailOne: boolean = await sendEmail({ name: userDBOne.name, email: newEmail, type: 'firstNotificationEmail' })
      if (!responseEmailOne) throw new Error(`error en enviar el primer correo`)
    } else if (userDBOne?.email === newEmail) return

    await stopExecutionTemporarily();
    
    const userDBTwo = await userRepository.findOne({ where: { user_id } })

    if (!userDBTwo) throw new Error(`se presento un inconveniente al solicitar información del usuario en la segunda notificación`)
    userDBTwo.verifiedEmail = true
    await userRepository.save(userDBTwo);
    

    if (userDBTwo?.email !== newEmail) {
      const responseEmailTwo: boolean = await sendEmail({ name: userDBTwo.name, email: newEmail, type: 'secondNotificationEmail' })
      console.log(responseEmailTwo)
      if (!responseEmailTwo) throw new Error(`Error al enviar el segundo correo`)
    } else if (userDBTwo?.email === newEmail) return

  } catch (error) {
    errorHandlerCatch({ req, error, res })
  }

}