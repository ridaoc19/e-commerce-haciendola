import { sendEmail } from "../../../core/utils/email";
import { AppDataSource } from "../../../data-source";
import UserEntity from "../entity";

function stopExecutionTemporarily() {
  return new Promise(resolve => {
    setTimeout(resolve, 5 * 60 * 1000); 
  });
}

interface UserCreatedVerified {
  user_id: string,
}

export async function userCreatedVerified({ user_id }: UserCreatedVerified) {
  const userRepository = AppDataSource.getRepository(UserEntity);
  try {
    await stopExecutionTemporarily();
    
    const responseUserOne = await userRepository.findBy({ user_id })
    if (!responseUserOne) throw new Error(`se presento un inconveniente al solicitar información del usuario`)
    const userDBOne = responseUserOne[0]
    if (!userDBOne?.verified) {
      const responseEmailOne: boolean = await sendEmail({ name: userDBOne.name, email: userDBOne.email, type: 'firstNotificationRegistre' })
      if (!responseEmailOne) throw new Error(`error en enviar el primer correo`)
    } else if (userDBOne?.verified) return

    await stopExecutionTemporarily();
    
    const responseUserTwo = await userRepository.findBy({ user_id })
    if (!responseUserTwo) throw new Error(`se presento un inconveniente al solicitar información del usuario en la segunda notificación`)
    const userDBTwo = responseUserOne[0]
    if (!userDBTwo.verified) {
      const responseEmailTwo: boolean = await sendEmail({ name: userDBTwo.name, email: userDBTwo?.email, type: 'secondNotificationRegistre' })
      if (!responseEmailTwo) throw new Error(`Error al enviar el segundo correo`)
      await userRepository.softRemove(userDBTwo);
      
    } else if (userDBOne?.verified) return

  } catch (error) {
    throw Error
  }

}