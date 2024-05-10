import React from 'react';

export type SvgType =
  | "user" | "name" | "lastName"
  | "delete"
  | "filter"
  | "increase"
  | "decrement"
  | "close"
  | "shop"
  | "search"
  | "openEye"
  | "closedEye"
  | "notifications"
  | "logo"
  | "padlock"
  | "email" | "newEmail"
  | "arrowLeft"
  | "arrowRight"
  | "arrowTop"
  | "arrowBottom"
  | "update"
  | "success"
  | "spinner"
  | "home"
  | "phone"
  | "facebook"
  | "twitter"
  | "linkedIn"
  | "instagram"
  | "snapchat"
  | "messenger"
  | "phone-social"
  | "whatsapp"
  | "location"
  | "time"
  | "redirect"
  | "edit"
  | "tablet"
  | "desktop"
  | "text"
  | "mobile"
  | "check"
  | "uncheck"
  ;

interface Props {
  type: SvgType,
  width?: number,
  height?: number,
  color?: string
}


const Svg: React.FC<Props> = ({ type, width = 24, height = 24, color = "#ff0d58" }) => {
  switch (type) {

    case "user": case "name": case "lastName":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "delete":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.8499 9.13989L18.1999 19.2099C18.0899 20.7799 17.9999 21.9999 15.2099 21.9999H8.7899C5.9999 21.9999 5.9099 20.7799 5.7999 19.2099L5.1499 9.13989" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3301 16.5H13.6601" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 12.5H14.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "filter":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3201 19.07C14.3201 19.68 13.92 20.48 13.41 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.47006 13.01 8.06006 12.51L4.22003 8.47C3.71003 7.96 3.31006 7.06001 3.31006 6.45001V4.13C3.31006 2.92 4.22008 2.01001 5.33008 2.01001H18.67C19.78 2.01001 20.6901 2.92 20.6901 4.03V6.25C20.6901 7.06 20.1801 8.07001 19.6801 8.57001" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.0701 16.52C17.8374 16.52 19.2701 15.0873 19.2701 13.32C19.2701 11.5527 17.8374 10.12 16.0701 10.12C14.3028 10.12 12.8701 11.5527 12.8701 13.32C12.8701 15.0873 14.3028 16.52 16.0701 16.52Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.8701 17.12L18.8701 16.12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "increase":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12H16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16V8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "decrement":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9199 22C17.4199 22 21.9199 17.5 21.9199 12C21.9199 6.5 17.4199 2 11.9199 2C6.41992 2 1.91992 6.5 1.91992 12C1.91992 17.5 6.41992 22 11.9199 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.91992 12H15.9199" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "close":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.16992 14.8299L14.8299 9.16992" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.8299 14.8299L9.16992 9.16992" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "shop":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.01001 11.22V15.71C3.01001 20.2 4.81001 22 9.30001 22H14.69C19.18 22 20.98 20.2 20.98 15.71V11.22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.64 12C7.29 12 8.78 10.66 8.94 9.01L9.16 6.8L9.64001 2H6.59C3.97001 2 2.97 3 2.61 5.6L2.34 8.35C2.14 10.36 3.62 12 5.64 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "search":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "openEye":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.39997C18.8198 5.79997 15.5298 3.71997 11.9998 3.71997C8.46984 3.71997 5.17984 5.79997 2.88984 9.39997C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "closedEye":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.41992 19.5299C9.55992 20.0099 10.7699 20.2699 11.9999 20.2699C15.5299 20.2699 18.8199 18.1899 21.1099 14.5899C22.0099 13.1799 22.0099 10.8099 21.1099 9.39993C20.7799 8.87993 20.4199 8.38993 20.0499 7.92993" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.47 14.53L2 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.9998 2L14.5298 9.47" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "notifications":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.43994V9.76994" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M15.3299 18.8199C15.3299 20.6499 13.8299 22.1499 11.9999 22.1499C11.0899 22.1499 10.2499 21.7699 9.64992 21.1699C9.04992 20.5699 8.66992 19.7299 8.66992 18.8199" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" />
      </svg>

    case "logo":
      return <svg width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="45" height="48.3" fill="url(#pattern0_116_4)"/>
      <defs>
      <pattern id="pattern0_116_4" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use href="#image0_116_4" transform="scale(0.00666667 0.00621119)"/>
      </pattern>
      <image id="image0_116_4" width="150" height="161" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAChCAYAAAAlfkb3AAAgAElEQVR4Ae19CXQbx5lmWRQpkkB3A+AlS7Ilx34T2zlsR3bsxLEjW4olS+JNAN0NkJKPOMckm2TevpnM7Owu981MHNvZmX3J7CR6nsQTx/FmlMnh3Bnb8aH4lmQdlmjrpC6K902CALq7Nl91F9gAARAgAR6S8N7/qtFo1Pn1X3/99f9/EUII+Rb50LXnKnyjuqgYulM2qFNJShFJMXrLFfoWuaMR/6NebwFS/qGEXBa7bm1dguuzBbXfGXHLNCL6oobgN6jgpyDDIt0pU90pa5og0z0r6vesJaSQ58NTnmc+01bSuqSVrFuKMrzEW0AJvQyUzzIzzZtafYnn/5PccuMZd33gaME9P24n9xi9RTVGyOkzIqLMaFT06Z1F1fQY2aCfEev/1xGpuvF5csNKSuehLZeAZQ7xzqsb/8/jqzZ9GN8wEAsBWNS7s+BA0eYPHXQ3/M2xy317upYrI31uHx32yHTMJesTkgmoqNNvhAW/ERL9xpjkN0bcsjFUJhtdZT6t09PU1V9a/5uu4rrgc+TaMtY2tG/tQ4WZgntGz10CFiFvO+puPLoySF/z1P7jJLAmOfCMOjaLP5kcklxmB/QBsv5jXULTM8MeJTTkUYxBlw/AoRFR1kFhwa9rgqxHnSw1NEFmFJUUg1PYpRgRSaG6qFDMOH1C07nTjurHdpM7LmftfGh3/sB1CViE9Dq8T/aJfqO7XO15idx5BX+rs8BGTh5Fub8jay8/I9R/d9gla2GXwoAEEAFARqnfAFGHTEEQXTgZgmJwSibO4DfNpYLT0Q5XQ/vBorogKr2bmJwLZeekETyT/AKrboclY2mQqxaijHW2cOsNY5I/FHb5tbGyAD22rPob6JucdzTv8BQpymtz+Db2udUTY6KsRUxiXEl3yroFIIApRgxgToXSzIgBD7I0uNeIJ2iccMg/epVs9OSlvRc7sMCtIqKPaoIvGhZlbcit9L9EPnpVivHPy22A6p2l6l8NSNvohKBqmkPWqEPWAChwGg4cQ1AoJ3YPnCszUE15DtMlZLWeSnn/XnL7zQxctoXCrBt6MQPrWOGWtSMueQSrUupUdENQwxFXMz1eUvt1+2ps1p2cJgOA6l2H/5FBsZmGBFWLWqCiDlm3iFKnSg1BnQIO6vRTRnw2SAEyDkakDIjW85ogR8Zdsj5QJg++Qe7YmFNwXczAGhL9T0wIfkwtEepQNepQ9YgQMAZcgb43yZ1XpMFDTn4CqA4IyiN9rgCdEGQt6vRrmsOvGaV+cCydlsqmPJUaWMY0wGLczg6sGLgAQianKeFxSaGDZerwO+Su3IHrYgXWucJ7bwq71XGdcQI1ClBRh0oNZ1ALSy30fEnTIzlBT5JMACioEk4U+/5m0B2kE5ICXR5ABQGdcyoD9WHk5FMguFaMc0EvCNJARhwpmiEwsgR66A7teVicC/k7VaoLQRqWgnRA8A/uJnfdiirvnq064mIEFqa5AdH3g6jIphiNOk1uZQ6koumOAB11NQ/kk2sdIzWbxkSVRgQTVFAUx09/igksa3oDMPASoM4AwYQYwIqRhgU/hRoiJHppWAD5IacxggrCEPy6SVg1mlPqJNeygFsaoJozQFGfTtHftq9k68ok70N2ty5GYJ2CbCX6whBgDUGJUqdqMDI5hEGdQT0sBY1TjvpHs+vNzJ6GSuG8Sz0xLilY7YFDMWGdAYsBKY4zsZ0K3dJhjbuDtMPVfPJYUeO/D7iUv+gorms+TNbXHSnY2NjrqG3pdXi/eq448FyfsK0vJGJ69VLd6YNaQkcbTXBx7oXpUKG0FBxMNSJSUO8vC9BDZfXfzqwlaZ66mICFKQhdMeSSn8BbrosQ2GPAMjsYnewIRCJCQBtyB/r3kztzvkI8LjR9p79coWHREtCdio7FQ0z/ZE1RWBFCuRmV/HTU46cd7qZdB4vrgs+Q2wVMpYnDytuH33aTuqtPLalpHXQ0nolImO5UzRBUXXeyrTuusgDgKLsnqDQiBem50oZ/fYXcU5mYd9bfLzZggVuNir5Q1NRIA1jsTWayS0ymCWq6EIxiyjlf0sBkLbqule0lZt3BCX84WtjwkWF3cAKDbZZtAxRf1aEepQoG34i6VNovNoy8J9Z8AfunTD7DXibktHRk7XViOu8savwRQKMLQQYu6sCiwAfhHcANT7gDdMytdncX1Pp5dTlI+fes04sJWOicAbf/+9BoQ8XABVxrKjQFZcYtgobhDEaiYpCOuAI9b+SQa3U5/U8BVGwKwsrPzqnswHIodFzwGQNi05H3yPpbkoKIbZYTtq/JQAfg2UG3dkdsy2agJPgXWJRERVVjZQp+tvUzUqboR8obfr2LbLiSg4eXxb/PKL2YgHW8cPPNg5I/hP0z08KCyVjmSotzKwYsJuRGMX2EXEF6ytH4KAT+mei27G/+QbLhutHywHjYaW7JpNScOzD9KbTL7T21i3z0BjbQ17cW8QFnqWWBYe4zYtMcoOIgMzfR+fMcGB2Fvv8y4vTpkC3RB/2Sd+iAe+tX8TueRQpLD9bW2W7x5AxYtorwAThbULcDe1PYnlgIWzr9ov+pkFvRI6IPKyVwLEurba2OOLjYkl6FwjQ6ISnGkCfQ8wq5e/VMOpwPGAbtdGnN34ZcbAqMQlHJVQA27XlM74Tn3ivetB7/O3R9axHSZOAh6PckFMe5bFysQ/R9pV/y0V6x6d19ZN0neL47ZqteQEb2TzbAGqhQ6D7yia34v73D7PnZfztbULMDHaSLCthvTHPMO3Qu7bGOk803h9zqKJbouujHMjxWH3vdzGtzVWYIqhYRFGNMlI3TjvrHGAdIIjQntt/+nfcT0vMu9TkI49b0lwxYkPko+uxMSe1jrC/XtS7lILHnm801qzfkMQtgux0b1efIR8uyySPrZzMFFtjnqEehp5Zs/hIta1lJy5qvo2LwGioE30+Flj+LXTubr6MVwWt6S7wr+5bV/9gSUuMGcT6A1S/4vx8W2dTHuBXbELeBPR5cMWDpmlOJAlxDktz7Cvn4avono8BsOpkD67euujU9LmWAOtlLFuNM6Atb2RqA1y94z5wkm9YwIFj7d+BW2ZQ7789mCixMG1FJwfwcMgQlYq1owNKnEJbwumiS1XFxHIt3pJ1jvZVHC9LjhdW3jJapbCUYs2Rl+2xxg2of4Ng1BHwoGrHt0V5Sm7Vei4sFJ4SmO8CJLGDF8ud9YaaqDiVoT2HNDgCDr0T5FDjvYMmmApkCy9KxpOiQ6QcovgPN5/MNLM4t+gT/EyE3M3iLmUebG7gZ1ZvpusKiTLslbz/jWllYAXBgHSfrvmSfBpP1B/RMAN9xqXYDH0M2jZnc6sLkWPkAlmWsxmze88GxMCinCuvWjngUayXIhfWMAMVfIkxbmKL0cbdqtHPZJ0NZiwOrc+nWh5FHKo4Fzg5bqc4y3+hvyze9n3EsJheZqz0OtEWTZsmx0Ml24p0/s9S0gswbsDAIHaLv+9YCgsk1yThFBvcY14K8OCB6+14hH7860wHmwOotrv+2xbHYijCxTA6sY8u9J1uIwARrzq0WnXyFzplPYPGpECu1N/MgY71bWHPzcLnKuNUsOS72FBnXwgrxZEndI3yanQ5gHFg9y2ofzwBY9OCqpgNeQkz1gsWxpitjQf4+n8DCVAhzkXwBq9fpfyrkUvVEdUcit8jwO7iWFhZlY9BaIWYyoDZgfccCViRZeRbHArAOfYyQEuSdKXgzqcecPzPfwIK5SD6A1U7uvSkkymFr9TqbaZBP88gDXMsIu1TaUVJvevRMs4c4CayaHTaONaU+HFjHlje1x0+FOXZymCuEXYjAwu5+r9D0PejeuDIyGZeYwT3GtXRBNUIudXAvuXv1dOPEgdW5dMvfW8CC6iUlsDrLvCO/8ay/nufLdFkLxHmW1ymjdBbA4nZEUeqQk1NKBaS1KrOE91xzrPbCmpsGJN8o9G4zAA/nUMlSxrXABSHIny2p/9/TdTKfzk6QdX9uAYtvPE/JH1wLapFTztome74Al/37orjOFFiWbRDbwGTu+HDJF01nSJYKzOaHWTlCycd/Q2cle0PZgOcJWL0O3/eh0LQGcsoAzhJsTGUQFVVjQJKn5VocWKeL1TsjUhDAZOBMVQfUecjZ9DS3t8L/GeUZXDkHb6bAApjG3areXVz3YndR3RO9RfVP9RbWPgnqYVT3ZE+hnWqfHHE0HTDNf1NwjjwAq53U3BQS1AmA2wJ1roHFgKELqj7hbqZnLNt4DoREbsKB9QIJrBoUtvVbgEq6E4HfYNXQKzV17ya3X8mmQStGRi607xw8D5G1MXOaF6y9yFZYb9gMCRLbkfX3TIEFeWW4TKX7yZ01KIRvN6Qr8HxBzbch6KZcleUYWOiYXmfTU2EEN4HJ7XRT8cx/h4mvFhYDRr+o9L1C7k6p1+KDRVvpkj5ny7PgSFhdpuLiANZwuUJPltZ/h/Wzd2fBTgQqyYGyFOBHPi9WbPvr1yrv/+kPyNrLWb7I2zIL4jJhunHN6LdMgQXv2YEKlb5F7jKjzQDptsoku+5YUvu4pZxM/obmGFjthVs/Mir5J6LYB4SV5MyBMy0oIWeBa41KMm0vqTYtEZJs9XBgYTA6iuv+ztpawnSatH7gspANx90qPVlQXccG3tLy54JrtbnqG3ortg/1eVq0Drd8/O2SLV4OFJRlRt7JbqOd/z8uzRRYCDDRU6HQ18k6JlgijFEM7VwOYG/VpMlsx5KGx9FB6TgWHAlmK7zzwet1NP7bhCRTRF+xgIXBSzqAOQAdlKY69hAHXd5+PnXFdW6CLqqNbP7QoCBPQD6brn4wMhyRlLMni6qv5Xna+5vfyyZtIxs2Dri8AxbXjI5JfjpQoUYOCU3f/Q25dVXM7suaFnm/ZlNG7NnsgZU8PlYsQ9vFXALrKNn6kVHRP4YILJbny7RcZ5bgYn59uujXYY153tpDtDWfXTI5ySa79Istz0RdzXBg4KvDpMBnnEtU6bDTe+Qkufc2PkVhsCEPJZaT7LvdN7C9qFqFPRqmWrZfKfg11B0MY9QdpOed6tFDxBtbjc4KVKhMtsB6k9zZgP8lBl5L1rC5AhbK7nE0PDkh+PlgMS/fWQInE2ACFFGAYMyt9u8it8fsxu39YR+kI0RpHHdthz8hNz1KCizUHRwRQBh0esffc9V+pZUQJ+t7mA9DXkpDkMvw7O/IBzwnC6v/ydqBQFk6BUcHCTB4ZFO6FhFbtBHXp+nRUuV7O8kty+31n9F1NsDqLpfpQgTWycLNNw65ZUQlBLAyAUQun4HXsQHZqd1Rz2StxIEAsOzg6igN/mzMpWCrCRvSKeUtTONczTPuVvSOsqbdba6abU+TD1bZ8+Plxbhaa+uS35NbrjhWtPVvh8rU03wBZVs0xMBsCMzX0NAdASMqtOijZdv0Y2VNXS8vvet2nu+M0gsBWH2Oxu+i8/KkXkgDQma4B2BEmXOCRxl4i6x/H1/W2wfEDq5dZOsNZ1cofeNu+PqxFeK0L4TFvfRxt2J0u5vOdrqbfnm2aPPXOgu23E/F4BYqqhu7C7Zs61ha/Y2RMvXZ0TK1C31iqXsAYCyg4kDMPaNNt33mQBIZE2V6zuN9D3Zn9vpnfb2YgYXBwp5gxKWOzj2oYpwRqg02aKasZXpPJ+q17MDC9Qsr677cW6kauqCyqTQ9p2Wm0jHuFZGg+Vfgyc2UwGg7CEI57nGyqTYAqDhQmVMtAxPzUjIENYIYDhPu5oH3yOSCIWtA8T8sZmChDX2C9wl0YPqByePvpou6Th2QtfyQtXpfI+vW8P61p6a6gLtZkSWH3DVPwY8gKrEpMU0bTBt8WxstWWmqWXiCqTjnUinztrgW86GMiNuNo8RUP2Sip7S3bcr1YgbWu+RTN4951CHsCtg6PWUn5u4Za6CZDyKLf2BQB4v6orO9Pkfd17hez97hDFiWMhL3d5LrnSeqmp4bd8eUpinqPgVYKZ7L/gWC/wL2PUOuFu0UadzGOGuG1rH2tk25XszA6hW8T4ZdED7nGVhmADSdCqbqYbBc7YP3NNf12TsdA2f/vtu9QepwKy+Oulu0qKimkLXyAyyACtNmyKVqbWSzinqhfsxpdbZ7k4sVWOcKa26acClsJTj3wErkDCy+KgN4VFIi2G04U2L5ISbYa4FrcWBxlQ2CfBwWt31/1N0CWQk+j8zBd9L30QRWorA9HQfmz8fkz5hDrimPjUuKMSj6j5wl1bflFFTIbDECC9NMV3Ej4lvBPgrTwhxPhQnAskIvWgK0Ac36iDvYwyPVJHKpRHDBVxF7iadc6peGBd/whNiMyC/gJnCjsyLEIEgIpkzOvZAm1CPh+ySwYkJ6BN7dmPpYOKRS+cf7yT1XMSXun5SuOeFU/K1ZjMCC582YKxDGUnq6zp3L3wEspnfCBrVLpWcddd9IBBXjDFacBT4GPMWzh0j1B3qlz/1k0Pk5OiYGEZ7AgNMsAIFog9RpRh6cbFdqj25LR6XrQpARwmACUOelxjNHC+seYHWxZL5k9eT1mlG6GIHVXdzwxASW2kkDvqZ/iycHJPfPmcAyYz5EJNUY9qjw6FnNB41zKibEJwGXfSXWVnCfct5x/3P9YsvYsBSkYy4FISWNCMIuwbDS1EvxkJBTUuw1RiRVR7DesLSdjknbaL+kHj/pqP/qC2RtOerEKBf7gsmQN6/AYkHOFMRHyNhL52zh5hvDohyxItSZkWLMIB5zfx2TWeJkIIRAAodgIR1jtvHYfolFhOGRYczoMPZxsQv8mB73kuabjwjq10+V+Q73lPtHEDc/5PTFdFaY1pIR5Lwhj6IPVAR7upzBp48VNrX81BavASBmK1cAbLaCur0B/PqfyQ0fOFfh60UALt0ph6lTSUphlxLuLpd1bt3A/58uPVfQ8K9w8tRFZYI6k1CpMkEdykREUCbeXNGY0SFNvcV1P9QEHwKHjVKnEqJOdf7IoYYoyKqDIaghRs7guOEMhnSheWLc1dx9kNx5He+nqeCygnXYBpeHEsJ/+DbNb8g1yw4uu/fqNrJu+7gUeLjPoX7vqEv9w/5K9Y23Lvcd3L1cfued8pa3jkktvxvx3Lejp7jpfx4i6za1CfU2H8XJFSnjVkm4Jq/nrNMnyLrijhXNV1LX9jXUJa8xU1xPpa7KbVe/S2qETAs97/RWTFRuu5q61NXT0d6r1NWZnP5FJeSHek6f5/w988Bq6npgNfXcdwWVmq/qd3slBhLGHezcil9zcJnf2bOIDGO3d7O+s99i9+kSL7m+aC1ZUfoxsqoElqGxadea6vhYxaY+PgXagMyfyWmabfSUbAvnDcr2f+me552X7pmF9hvvh6kci1xGqEV8qsR324eb3sTy4OBgQOWgtFL7b8mueRk2tYetqIv7kskHax8qzPvRaDns5hgoLg1sDns1h1mxAcrFlkMO63Qpq0XcA5NvvLlMfo+su/a9ontZlF/8toibdqnqC6EHXiEfrzxT2tA6VBacOCc0/gx1ugSshTAyi6gOdsA8Q94vnBUa/npIlE/huA/QgMP3fQasDG3AF1HTL1U1Hz3Apj1rOfxNco2431n9+Q6P/92Qp5kdKKQ5A1q4RNaGS3w/uASsfIzABZznE2RN8TGx7gvdktw27A7QcSlAI0JwIlKqRAAs7HuNlPieZsC6JMwvbiRAB5PPFoBT/ZB8wv1mRf1XT60MnOstD1CAalCQ6Yio6GOuANuVH5VUdq/b2fTvl4CVzxGZo7zzBSymALT0O/9S/JE7XnRs+Mq+0o2f3VNw93aTNty3t2DD/XsL1j/wdsHdD75dsOHTe5asf+h18sm70PSdVnyDOeqGS8XMVw8wGcmu9Y1tQVjHaaT7bjtywy68z1dbLpU7hz2QasBT3c9X1ea6vHy144LMdwdZW9i3PHA9dQVvoI7gDSzFNcjd8mFGjpYPh90tH+4QqsvRCakGlN/vKN68+lTBvdWnl27amJ62bDy9NDl1LN2yMSWRLRs7yJaN/cTa3L00FS48bP5f8sHrusr9o7GTNpnnScz8lZ88asBw7WjhvZ9jwEqhN+ImHpoU+DT3bUubiqZDJSxBkxEL4JYY0M32nYqBW1h90qwK96z037ZnlffAnpXeXXtWel/Zs9L76p5V3tf3rGpMSvtWNL7Strxh9+ulG/88F6N1pDy44+By/4F9K5p2vb2y6dV0ZD7j3X9glf9bmZa994qmv9t7RdM7e1c1vbJ3VdOrb9to3xXePx6ukl/vEB98Zbj408+PFj/4/Hjx/c+Hih98fqJk+/Oao/mHEUH57pmlW76+j9zd/FZ5zfv/iaxxZVp22udyCixrgKkQ+LRlqQlLxzSk4tjcmZO4fVpgUWnbPYbYTOMpQA3RIhxIyUimhiRTDaeVuWWcZ0PbSN26tJ2XwY+aIL9phR3np5qmSg0ECgFpgvJyBlmzRzRB/YnmVGhSElhUanY2o3U+I3NstUyomWEkXl5EBOqrUOm5FWr0mKfh4BlXwzffWHrXxlYrLDgK2mmdQJZpvQiA1VkxDcdyqogUHONYqVZh3LTWBizugZs0xREfs6F0HItPy9TZchcOD9cdgajuCOAg8UlCFGRGsobozXYKeQJae2Xz/h3kfcyWKlWbp+tozSm/aAEras8/+TWMLRXYuP9uunzxO9qoO9WnLEBGzLbwNiGNb1Pid3hwI4Ac4nzBjDnkUhG1kUWFhiPtGan2tbbljdtaCWGnyx7ymsfbZVK3GLCY9we8epNNhU5Vh731kcLNn0WmqTo5CbDSOjskepFk+52m4VgxYEnb1lMnYn8GozhE3Lqm1Bm0mTJPtX+HTX3P5S30oLvpB8zg7k9uXLDszKhTbQ9pgvISjuDVnTKAlYpbWfcZKMB9nkf9YwT9oWmjNXngpbXxrouBH1n9hpeUefFMpqbrPedQiSmP2WClptgDZw12KDkO5fIbgxV+40BVw6u/L72HHSe4k1zPDjewNTH55Q7yoWvPl3tHUOiUKHgOdhIoYhMAWDRzYCkP2qbCPLlmqZSK6kfRqsQ4Ceye1fFUCqy3jubVqAMBzxIPvZwKKtQdbvvwtMGhke8Wbw3wcjhgk/fm1LuGoLxsDSgcHuKmoiTfzWdE9fesvBSyrP036gw8bQEDIoXtZZmRBxPGKkYGHHBdfm2kTDE6l6v0rco683xsqIumsyhhzhTl3hF0JN6sOC+WKcDa9Bk0anqONRfAUmhGU2E6YCX44cW13epgzR3QB1z+zr3wtkGHWpEMp0Io+Z1FBqz4Gcb0l2RAQxiAc6tUemhV08s/IR9exa1ak7eaO6xODywtJMr0SOEMgJXPWKCSuhYNS8qxrLc9LcdKDyzGXXAky6joo+ck+T9ZWVnaii9qYE32DxxiEEJJ7y+XjfbyprbnyK3X86k6Kbgy5Fj5AlY8h5xsSPybk+q+1HxzPoEFDsYcUEVFGyxroW+7W/4G5e1euyPmtJC0U203LxBgYTwY54IDbb/LS097Gk8wcFnHAduabF7OI7BYRbnj5YzSNHosrlObDcfiUyMLYutS9fOiGn1DqL0DPTetjGH1NBWUl618kkeOjn9prGfmTcaa9oXGi4bQ7CNlCj1V7n3np+TDlUmnxfkCFgRXrjxl8p39lItMruEFLQQ/zgY5iYI0l8CyOJcOYb6rQjkAFQQ608JO2uRCA5b1khgIzz5YGaCnXMp/sDHAKtbeJ/MFLIBqxKMMdSyr/kx3wdam7qKt/niq9nUXgWq8SamgxjvMnTGTbOnkGlg8HuiEO6CfczV9Ly2abD8uCGBZQUvYAev263huOS234hwcqbVqjg64FP3YssYvxMDFV4vzCazRMqXbNgY5vcwpsJh+z1THYOUccQfoUXKvqYLgHZmi9hcqsDDjaE6FBT/pcfm62sj6P+PgYl0xL8AS/BSxn6KS0k3dD0l8dQEwMEoWZjqJ7iSdnBMDlgN6LCZ4Qn6Z3WIBK1ycpiEqdKSs5fxuUnc1ykmlfmEdLfjnQMZiujhsnU3lOnYOlXid7PkM7nH9G1aKOPwh6gnQ88V1/8LGkccDmy9gMXbqlBmwUrzs095OZ3iYF2DZgBlytRhHHdt+i8AdqGgqrTydT2AlAinxewYgSgZWG7CYGgIvWsgdHD1CtlwXk7PmBVhWg3SnybGmRZD1QKzSKb7b88kTsCyOAGuMIB2WWoxTjqa/RrkoLxkHzf9UqDxtDf5UjpUIpMTvswSWBTDEq9cRKuns0vv/e2wM5gtYqFTUFeym73uIbfLGKpTmInHgEoFm/2u+gYXoehFBMcZcysQhsuETKJuXGVePvKsb5h1YCJEZQcTlnpLPvhlr+3wBC6vCYY/SeYh4J09st2+8Jrlmg2cTlucPWGz7ix2UDpOT7org3l+RD7lRnyngvwCBlWR61CJSUOt3bRt9k3zqRgau+QTWoEse7Cxt/EXP0sZfDiyVf96/TP15b1Hg511FzT/vZKT+vLNI/UXnMvmnZ5f5n91PNm+yD9w8yFhxwjEUpxOSovV5VPpecc0OBvwEndqFOBUmARaE+OiQR6G9Fc3b5xVYbCq0LEdNS9Eg1ZzwHTQpLAboJCl0xBWg7xVu+TyAxaec+QaWaSmhMHlrzNMcOVpkBd9HJBy+V3lxcCx2CMKwW6FHyT0/mldgmUt/FTZAUAMwmjRE82m6c5I0waeNuWStbdmmz8wBsCAzxJm3JHlDTc7FTXBKAzTsVOmQW+ngJ9vTa764jHGwiwRY5ia1qrWTjTR/wJL8DzItL8yS01s3ML1S4kBCx6UjzqZFmuDTx1wyPVy48cF8A8s6DImGRLk9jHqYR+3GTYFxQLPABeM6hAfvcPh/3UrWLeVT9kUyFbIXEX4LoyVNxkIAVvIBw7LY6WNkgUsfd8lGW+Gmh+YAWBoWFl3LajeeLap+csSjgs0jLmsa5So3sFP0Mc99dJ+47SscWFFh28sAncWVk6WtuT8AABs9SURBVLd3ctk/g03ouV8Vxr1YVt1N5qCySNYLF1jmESKUIjV1LzgJlL5buOkBDBjXdGckYzFDv6w078yKM1Te/MnHCHEcq5K7xt3sKJIpp2cldDCz1giLitHpCg4fJFvYBvmI67MvR4UWACrFcSZx2vJFBaypM40pQiw6YLUV3sM4Vr6BBcCMVTRvhgD+ZkWdr6dKxeHfTMucAKYpHEgT5CgOahpwKnvRwRcTsCA2gBYwsKy32NpThO01BmuuOBbAM+pRN7IOIoS86an5xtkVQbhJMUeDSdvyOG7DQMYcJkQlEhVVrX9Jw3ei4rbXrKkwzVQay2fRciwACiLEeGnT/APLzko52uNTCM/YrPYzs1guvM8Fx5rwqBu5yfMOQgqPVslvjHqYF4wNXDFAJHKuZNPe3AML8k/iNo79+6Rsl1j/jL4njh8OAu2+bPP8AguV4iAC0kGoGAjyVALpsFg8VLjxs3MhY7HpTjQ5FndpO1dac1PIpU5A5wZfPJxTM820iL276eSyxAGcIcdii4dceOkk1ift9wRgGWGXoh8ld2rzOhWiUpogTwxK3hMnyhvee6e8tu2dstq2Q+X1be9U1LcdqmqI0eGq+kMHlzeceda5wZf1qnAGwjsHFl/Z8fTMsrovgmthWZ3B9AbgXSTAMo9dGS5TjbOldeZGdF62dDLQYwFYUUnt2l9y76ovErLsy2SN66/I+6QvkmvEvyTvFz5PrncmUiu5vmgn8Rbwgc7XqtAOLEyH9j3JUxX+neMSO1UV3AXgSce50v2WjBvMgGPl1K8wWZ2m3JvkVJaDrBPyZ5CerVKNtxxbNsw7x4KhX8eKh0r59gcXljNN8w0s1IPLWbxOz5APVvW7fKeoFIRSkHOkbAE0ZbCsaXVRAGtSBFCp4QwyArDaK+WTPCSBeRBmrv0Kp+FYHPG6qHRST0BkA5jEmoFNe6nuWxEA+YAnphysppdOdnoszrFYvWybylzeOl60pWFMZJaknGNdfMBiOw4IUxBksjJW7WdL61kUazYW8zEVcmAZgtJJy+8XGIBgKGc7DiTT60RA8e/5AFYrIUvY1NjauuSEVP8YvIOxR4b2TDMlpuJQifcXD8eKAUtlMR6wuDpS2sTiO8wbsDgrZcCSVDcDFs7PA6XiUCnucyAlpvkAFspAvpDzYIp8przpDWw1YXV7cQCLb11Nxr/A6jjiVo3TLu8LcWMwHxzLDqy4ymT5hYMn2d/4b7mcCnk5yBsxHF4n96wdFJtDOMgzA0E+kTsl+77AOZYNWAhA4mAm2vpg2Xb6+rLazbx/WJp3YKVbNQlqL3Wq36KC8igVlG9kQ7oU+AbOLkQjwOXiGmUzE84HsFiZlr3V+SX3fSFUEkSknogV1WY28taCBZY13ce9DLg36r4veljY/m/cqSQ2DvMKrHjNr10QNq8Fv0HtNLm8h82UEXUHbp8vYMU6kBDS51B/BMUugsiZ4EqrgogbHM69rXTRAAvTP9rcX37fmZ+Se5ib/Qvc9QudM8/AShNGUolSwR9PsbCTKjvVPRYfax44FgO05YH9O7L28p4y/7GoxNQPXAVhi1WVcusnEWQzAFYas5n4FzexrBl/B6cCqEbcsn64YFM964tEL6V5Blb6xtn3tXAd6yhL880Dr80TsNChh6zYnIdddXUDFWwrStNFzrG4THLhAAs7DtjWQhyL86V1sWDHbBVvH4cFDawYkBIHJgFYSSLfpRLek8kKk4Bl5Zhcg+8V2vRYAFK6z57y6n88t8JPQ25/JCFP20uR2Ja47wuTY7EQAwhzqSBIsB52qtHBosavoi/YKj5ZCM28AEvId0Q/ixNwjrVAgIUgsO1X+F8f9fgN2OzPAFwLE1h4wR3wowzQkKDqAyWNX4qphZL0PXv5TGD5RpinDBOOOftWKS1VQIhBOsPAayzUNhwmbPKG/Trubc30rZ7Ma4EBCx36FvnYTUNu/2gYmnmE3kS4zZScd0r75wlY9jHBtVkvNu0BEw4lAlD1ljb1thdVq3ZQ8ZlhCie/BKwUgzuDqZApeFtbl5wSlS8PuoOwgsiWay0YYCEufNilauMVzUZfRZCekZp+f4Csu9au2kkJKqBsHoFlVy9gJZUFsWW9HlsVJmHHvNGJeqx8ylj2t/aE574fh1wtkLXQrhgXmOZ6BsAKPG1Fgo5mGhE6oQ6WC54aoc4gdHGoA3wM9J4Khb630nf0D8urP29vW0bX3yAfurZtpW8EJxMMlCnGcJlKOcGzdcijGANlitZVIdM9pZkFtx0uVx4cLleQTxQ2Ojy/KSmemQlZdRxfboXjTgEsvF2hssD6kFsxQm5FG3crBvb3piE8R2FBig5MtG6YrlMPXW+GDPgjqVlxvtR/FAOEDdpUlFAXVvaYR/09m26StIuXz1+csDvwNFZoYZcatVK2YjOvpxhMMgNKXpfJslUKU6CoGNQx5Y055cEewfurA47N9+0gK0rtXIqXP236t9Laq397df3J3dcovfuvUnr3r5Z7377S17v3Sl/P26tN2rtaPv/GGv/orys2MfdpbhqcmDk/uWD/Vf6Wfat9kX2rfZ37Vvu680UHrrSiJicZADYwlF52crm8rr3SR09W+SYyJTzfvtzHtiiyBZa9Tw4X1Gw57WmKnC5vCp+p8oVOLfdN2CjcXuULn7RRe5Uv1F7p09urfL/mwEo2qGxpb+mNTlf6f3i6wkdPV/hGTlX6JuLJO3Gqciq1VzVOnFzeOHH8cl/o+OXeviNVTSfOLldeP1/c8ESvQ23ZT7Z8kFty2NuT1TU2U/8rubqylVyxwk7/QFZf3krWLP8HclUV6G/IVVUwwEPm3iShGe2FtpLrnX9PVq00/7/6cuSVD2ola4pRbrLYVHxAniVrpWfIR2/+BbntI5nSz8ltt/6MrGOHFaV6ieztTXf9K/KR635LbrnlZ+SWG58hN9/E6Rdk7ZT68Ho+Q25+P/LkbUjMn+uMXli3bunvyMeu+TW57dZfkVvXZkM/I7eu/Q9y802Pk2tWPUaqHOCAjKzN/sQyF8T3ZAOdj4rZLTsT82dvPLeISMLREp+3f081oPZnZnKdWKfYYPJBtaXp8ufAisuPtzXb1B6QNl2hC+U3vOk5aXiajuJtTQWE2ZTP885lmk190pWbU2Al9i9CMSVQurrM+W+s8TMw3Mvmf7xR+A+/Tkyzyc/+bGI+uf5uLyvZdbrykj2fi3vpyrz0W/IeAPCypeQ5LYy72bYl7vlEELK+MU8XWxitS1WLKSzfJju0/kneAdkblyqfHN+P69wMgJbj4nOaXbZtSf88QLUYgJXTLpyDzADyOSgmp0XYX0z7dQYvTDzIOKgWCrDsXAmbrz8p/sT7uir9N3QvrdnUTjY9cIR86ktHyIYvHicb7jtbsHlrR7l881Mlt65iDglZrtJyOiJJMpuNripJdnNyi8c7tYPKWiXHDsuck4rkohD7ABwiGz3HyYaGU0L944dXet94d4V3ABr6kEulCBk4WK4ag+UqNPeI1EL7yxXt0Epf/8FVvpdOSvXfaSMbG58jHy1DvdiyG44U8wS4+Sp3NmMSA5Z9VRe3mlsEXJhxJwIHgp0FB8mG684vq/3msLPpDHbwJySZDnsYGWFRRpBTLWxS1Epxz+DPDZXJdNwl0zHJT3vFpqPnhPqvv0o+di0DGDopwfN4Np1/3umtmKjcdjV1N19JXdvXpCT8bjernU2hc/Rf+4wRu2arcKgLCKM5qsrMi0HFXyO3rTlb2rhjSJRHoqLKbM4NwbQ70p2ybhHOPgbZzz7m9/gzSA1NkAFE7MnRXqEp1CHU/uObZN1yXkvGxewWifyHLNIzS2r+FYc36pIyTp0sKh8i800hQ/SPUan5qiyynvdHMSavk3uadpK1LE7+JLi4HmqBciy4N6H3wEHaSrxfGBC8vRNiQENkY2ZjVIpQjpazw2TwC7vFQuK13XrBgD8aorZoThZLio4LfqNP8J5/R6jZxkcNncWvZ5JawIJTaVqLTkPwj4OrzaSM+fgPpsEXyLpVZ8vU/j1SrR914AppJsOyKXEBAosP6BNkTfH+su3/1ucKsMN4YJrKDP9KZIOW+gwbsOwgSmYiYv+dn5Y+mToUgIxGpCDtKlejr1XVPt5KSBGTI2Yhd12wwKL0ssNi/d8PlW8zjpX5nreDm3GuhQosVPQn5KbVJ1zyviH3Nl2TAjqLfmydfkVLZcooczujZGDj9xjodKdiRARFH5Vk2uX2acdd9c+9TtZXxVj8DLjXhQqsl8idV3RWqD2j7iDtrQwaL1RW19n7acHKWDvJB645crnv8GhZwMCAW6Ayp0DzZHvzetbAgucN875hMpvmVAzNPKOGjgp+et7V+Na+kq0rAXT4rHFOan9D011faMDi7T8l1H1ttCJIQ06/hhX4u8vlF9EPABTvD/s1vzev6S/I7Vd2ljUfYgHGJObGZJ/GOJfJURoDFsvPJvQz4T7iVulRT92rf0nKmbkO79hMO+iCAxahl+0ia6/sk3ydURdzw9IjkkoHyoP0Vde9jGvxvllwwDohPfTbcdd2XTdXT3ZQ4TpHgOL5xAOLLQpsHBEnVXRXysYvV977H1DCZqtcveCARell7e7GR8dcMiLcsNCQWABFpKB+3N30MgfVgkrp2h2FJ0uUh4c99+MMmzAT1G0u7TmKppIemDZQMRALfhoSvbTv8oB+SNpq+rFlMSVeaMDaRT7xvvMeXyf0gMwDyMmOjNGx8BmsDBgveO5tWliggkqB1N0zJjWzM/gg52BaskVQ4ZwrPTBmy9ESgeX0UcPhNaio0mHRO7Kf3HUr029luFK80IB1Rmp8FH4DIacvagELsSJY1JeQJ0DbypuYrDXv4OIyy3fJ+4WTZd6945Cp+ODiyBHu4j5bwMzk/6iHeUKFYTi8NORRo4cr65/jKx5e93SdeKEAC23dRW6/ctgT6AqLLCiwZgOWAe8cTQrQkfIAfUO4ty5dn8zJb4g7AA6wx1P9lc4qWZ+QLAdLNqjzDCyA0eHjZIy7fPTMCtl4qWzTNnT0xQQsgOGk1PgwXnzdqQBUbPfCCpukM7cvIQBwGSfdjS9DFp0TAKUr5BFSLpwoaziM07VwIjmTrWJcK0G4ngnnmcl/YpzSPKgJBzZpgs8Yc8nGqRXqHnvHWTv6cU3koLtQONZL5M6rOtxy78QksNg2mQ1YBnUGGI2UB4xdZVtZBJi4TpnrL69cXt3YWyFrmiBHTNkKnEK29FQLB1jU6cM0rfVUKNpvqqrv5uC5GIB10lH3yGhZM8UBULpTYdzKJrxjKtQpttqcAX3CHaBHys2wjcn6Zk7whWnwqLvhh2yjlrFXVvFs4w3kXaC39Ft4SzUc87avvJEdk4tOStZ5HHQXAseCln1Q8vcw2coElQ1YXM/IA741G5rUTAcqVPqqEK/XmhNA8UKe/VPA/j6PzMxfoF03p0GLY81kCsvHfxxxlhL6uKRo58qV93g8cbwcvD085fcuBGAdc9Q8Ahs37IBw2QrRDEGTq3ZT7YDQ2AgzFHEH6LkV6ku8P+Y8PU7Wb4XbOUxYYtMfE9y5AnNhpDaNPIWNFwwI212NN6HDOIjsncfvLXZgvUI+vrqzzNeJRZXdNGkSUHHgYmEqYTWiC6rRXxnQ/1C2pcHeL3N2PeL2fwF+/JCvFguwYEgIi9QT5J4HLnRgnSyt+RqmfhhQ2rlVcmABZGxKZIdIjXpU43B54/xo498jd3eNuBWsBrWFDCymhbemRE2QNcS/HCqp/+fpgVUNQ79FaY/1EvnoVf0uXw/aqglcvWDnUFOvcQSLOUWq2EM0BsuDxmtOk2vNNlRAVtzu3NKtxpiLVXxyKsyHnJSLPCdlLRbjc0xSdkJI59OeveH83pklixdYR6Rq8+QLyzo3XqaaCipwMUv2Ytp4aw+RHnc37ZrzDenRksYo7NHZ9k1MxbAw5KpkG96WrAWrU6OnojkWkcUOKjsX6yDMNHnRcaxnydorOzwN5+EnwNQKsIObum+b6h7jWggNDuqrUPU/lG1ishZ/4RL7K+ffNYc/ZpvOpsJccJY85mEH1onK5r1QNSQLQMI7cLECq92x9dHRchmyFV76VABKed/iXAipqcH86VBFwx/ZC2ez18o5mOwZgivwFddiABbqawiKhlXPgRW+PRcisOC0MuT29YQlH9rKwZOtrhD/A7CYvRZc8V4XNtbCj4Hr+Ow4yPm1IakQDCfBlUduk2xqm8k9Dqy2Ff4LElgnHdUP49hia6dhpsCygMjClmsQ5I+763cBQHMib406msBuY+CayUDP9X8YsETF6HUFnzeFd5pSQbrYpkLorXrL/Z0T2Ct1yNnELk3H0SBzhbmsxfpsBv4DWXG1cwWbWWxMc/M5q7DR6RqS199gORmVFCMs3ff09KvCxSW8n3LUPDLq8etQqWQZFHe6PtdHPYp+uMLkWlmBZCYPv0vWaaMepsdi0+Fcc5+ZlKeLShi6qc5ltd/MHbCUefUrhKwI69BBl68LLznjyk5mfozrGM2kv6z/GBFJ0bFj8apgnn2TV73WKWfN/xwsV9h0mEGY6uneijn5PSIpEZxZ07bknocuFGCBKRwTNj8y4VFhLatZqzqul0LKwDULYOH/TGkKWctudjQThjTtfw6Wbt7aUeE3EIoZdtOzqXg+/2sIfgqCReu4x2+0V3np2xV1N14owMJKsL/C123tCTLrUNuK0FrhzVq/CKfgOL3WtACZ6QO/ITdVdJWrHeNSwDTwW6CrwjhguRV6rLLx4D8RlwtTCMCV2P5s9VjUOb9T4ellWx4bc/uMqKSE+bZMHoAF9UOE7SHOhazVU+r/TVhoproDhmJ4K0zOAO5gH1Bm/z5XwGMHWU9y0Fg9nEoE2ugOd9O3OaCSLZ8zBtZkOfMmY71Ablsz7PJ3wsLEDqo8iSaQtQyIP390mtr4xJcyJ98xOMcLagJjYtDQnAFzI9oGLA4uBipMRfMELF4PdDY0yW8sXX8HB1ayjlhMwDoqVD+MiDs4+tcmW81apko1VqaspRjH3Q2vJOu7nN17gqxxdUv+Y+FJd6+5A1DGQAX3xJEcKj3j9v0BjU/GqXinLBZggVud93i7oBCFWYxtPzBfY8DkNaw6ccTNc2V59OjBm3/a3fjfxlyWwV/Ggz1rYTKrzsOxd+Ou7dpBZ5O5oZrGUycrYDlVaojqmD2MEfokjmzBeZE3ozTlc4BPl54Sah+Gn6C1JzhXwAK4oGYyDtlkrXQzwHTtSPk7E+I93uOw/THfGn5+3dyCZyr75vUIhsPCNnrW0cK07WhIuo7IGFgAFY6iFQNjdM12dsRJyk5K8gMHX5Kfpr31BrnzquFytdvyE2SqhTngWNb4QvWg6KZtvHWmc5JF0LSNyOSBwyX18hBOJheZEJkVN5kKiFwB0gSW7mim49IDoWOlD65lg5nEzt3exqyBJaihswWbt+8md215mdyxZRdZt3VXgZ0+Wb2rIAmRT3pfIfdU2svO9PqIo/YxS83Dhfa56nO2/4jpEAFFjuVTr8Xf/naH/ORQmYyVQ4LwyDkHT3MFHDMf26ovvnNxFrFTpaES1ThfFPgfGDQTWFP3B+0DmjGwsCo0uVZ0wuGnI6KfDko2cvnoYBIacvupRfpImXI3r5e9Dumu4dXcVa6cx9Fvpjkxs2KIb3t+RRKAi9lrDVSoxrOWbTzHQbq6Z/UbkxkIvewNsr6sp1LeF3L7qS6aAnPuj92dCspkwIKwrosKhYdKp6D8jDeI6a6mOVgoW2BhcNmUyMyIIEgzYrZQNicGbnduTyl1yutQt2wGpb2k9tHxim3WCaywU5/aJ3m+x7gWdagR+A8cqmjKj+WDyQVMN6o2suFDA67GAbi0M8tSdi50gNJSi6Dvcpidj8EHZd0JlhadA2oyNTkUwBwV1fBguaofczXu3Uk+4IkBKwOhOWNgYUBNy9lJ02xuSTt5H7/FkxWMzozIE8wYWDuJtwArwSFPgPkJwqPGkquy78PcgFHDShuy1uvC5vzYazFwIRQ2pZe9TT75qZEyZQSCZczX0Dx43DyAPC/AMreV0NCQSw2jsUcqGvf9P/LBK2Kgmka2SnwuU7OZrF8Ma1CzBRbq1ybUPgw/A7yccySspwMt5LuIJWsxj550ahzevzNKebzz42TdJ4bdSjsETE2Qw7a3lr/l6Sqc/rcpHMsEFQYK4XjOVKl0X2XDa0+QNSw8NwN9FquWrDjWLN78OGBlAPrfI3ZoldI5gdX3wgAWxkmD48VAhapD1sq2rzMGGZNhENzMu7PgdbJu1bEq74vDLj+cWgEoPiWY4JrpoEwCy0CseGicdVExoi7V6HH76MEq+but5PoiVHomDV2owDruqPnaQJmsI4ivDVjpX8KZ9nHm/2NhkMbdqnGowvRDzB/XghxjndTwRUKWtQm1/zAq+ket+AHM3Zs6YkFvDdZJeAPj5ZPU3xF7yySDOn06FfxGVPLTvjLfuQPLNn+GvwUzARUDo8U95nQqnIZjQbYaKFN6YcsOLyPszWLBMCMZNXPQTAPayW06HAphylqmbfzutQ8V8nHIacrfenAwZNxeWHNThzvwh25PgI67gywWky6yyCcadShRk5jjK0J3JwMVuB1+03SnT4uIPj3i8uMoFCNU6ov2FTfs2E1uvxLlxsrOYvqzN57/PwNgcQ48ozTTqRAvyBGp/lFYMOhOH+K7sk1/8xCFmMMEF+TnMPXr1AnCdMjstehxdz2TtRDz1d6nebm2c44/eBo3HvP4nu6WfJ2jkp8ZCSK0jsm12FTJwAMA2Qj3QGwJDzv7EbdMeyvlk6edDd86RDbfmMuK24C1Y9ytwME1hM7LNWUKrOfIrVXd5fLZCYkBi/lx4r8wszaD1CJQ7XyQX6NOECsbslZkuEw1dgn3VudyPJLmxW2eGCex6Y8QFrqjqD7QUVT/dHdF4N3uSnVg2GMexmTJY4xr4RqmLlgJjbgCPSPu5kPnCxv+5UxJbf3vLDUCgJu08Bne5PmdW1LzlOVijykBTgU6uCxs5rHDYCMWdA5mwZkSXg4sbEIuS92QZip8V6h+HIdT4T+601TjQJUzY3VN7qZCnC7Cp0sma0Fpe8zdeBjhQ2fY/Zn/jXEsfmSZbariOQB8/0yuW/3isk9+6njJZnXC7f8cFX1/rjuVz09I8mfbHbXqS+TOu39JPsYOA+D/Q8oAm2ZQ7M9meh0D1tLaDeMe5cu6pH6OiuoXIpL82Z7imkBXcV2wyzE7OuOoC7aVbFb2Ou+tYP2Tog0PEVJ4aKV3e8SlfJHVw6l8ni5gikjKZ4Y8ypc7XA2rM+3vxOf+P0EBRZfzPNxBAAAAAElFTkSuQmCC"/>
      </defs>
      </svg>
      
      
      
      
      

    case "padlock":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7901 14.9301C17.7301 16.9801 14.7801 17.6101 12.1901 16.8001L7.48015 21.5001C7.14015 21.8501 6.47015 22.0601 5.99015 21.9901L3.81015 21.6901C3.09015 21.5901 2.42015 20.9101 2.31015 20.1901L2.01015 18.0101C1.94015 17.5301 2.17015 16.8601 2.50015 16.5201L7.20015 11.8201C6.40015 9.22007 7.02015 6.27007 9.08015 4.22007C12.0301 1.27007 16.8201 1.27007 19.7801 4.22007C22.7401 7.17007 22.7401 11.9801 19.7901 14.9301Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.89014 17.49L9.19014 19.79" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "email": case "newEmail":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "arrowLeft":
      return <svg width={width} height={height} viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00009 16.92L1.48009 10.4C0.710088 9.62996 0.710088 8.36996 1.48009 7.59996L8.00009 1.07996" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>


    case "arrowRight":
      return <svg width={width} height={height} viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.909912 16.92L7.42991 10.4C8.19991 9.62996 8.19991 8.36996 7.42991 7.59996L0.909912 1.07996" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>


    case "arrowTop":
      return <svg width={width} height={height} viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9201 8.05001L10.4001 1.53001C9.63008 0.760015 8.37008 0.760015 7.60008 1.53001L1.08008 8.05001" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>


    case "arrowBottom":
      return <svg width={width} height={height} viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9201 0.949951L10.4001 7.46995C9.63008 8.23995 8.37008 8.23995 7.60008 7.46995L1.08008 0.949951" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>


    case "update":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.6 11.23C6.77 10.04 7.3 8.97 8.13 8.13C10.13 6.14 13.28 6.03 15.42 7.77V6.82C15.42 6.41 15.76 6.07 16.17 6.07C16.58 6.07 16.92 6.41 16.92 6.82V9.49C16.92 9.9 16.58 10.24 16.17 10.24H13.5C13.09 10.24 12.75 9.9 12.75 9.49C12.75 9.08 13.09 8.74 13.5 8.74H14.25C12.7 7.66 10.56 7.81 9.18 9.19C8.58 9.79 8.2 10.57 8.07 11.44C8.02 11.81 7.7 12.08 7.33 12.08C7.29 12.08 7.26 12.08 7.22 12.07C6.83 12.02 6.54 11.64 6.6 11.23ZM15.87 15.87C14.8 16.94 13.4 17.47 12 17.47C10.78 17.47 9.57 17.04 8.57 16.23V17.17C8.57 17.58 8.23 17.92 7.82 17.92C7.41 17.92 7.07 17.58 7.07 17.17V14.5C7.07 14.09 7.41 13.75 7.82 13.75H10.49C10.9 13.75 11.24 14.09 11.24 14.5C11.24 14.91 10.9 15.25 10.49 15.25H9.74C11.29 16.33 13.43 16.18 14.81 14.8C15.41 14.2 15.79 13.42 15.92 12.55C15.98 12.14 16.35 11.85 16.77 11.91C17.18 11.97 17.46 12.35 17.41 12.76C17.23 13.97 16.7 15.04 15.87 15.87Z" fill={color} />
      </svg>

    case "success":
      return <svg width={width} height={height} viewBox="0 0 164 164" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="162" height="162" rx="81" fill="#E0FFE5" stroke="#4CD964" strokeWidth="2" />
        <rect x="32" y="32" width="100" height="100" rx="50" fill="#4CD964" />
        <path d="M100.04 68.604L97.642 66.674C96.46 65.724 95.773 65.735 94.761 66.985L77.332 88.494L69.221 81.755C68.102 80.815 67.402 80.865 66.482 82.015L64.631 84.425C63.692 85.607 63.812 86.278 64.922 87.205L76.482 96.767C77.672 97.767 78.342 97.664 79.262 96.545L100.341 71.484C101.331 70.294 101.271 69.583 100.04 68.604Z" fill="white" />
      </svg>

    case "spinner":
      return <svg className="spinner" viewBox="0 0 50 50" width={width} height={height}>
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" stroke={color}></circle>
      </svg>

    case "phone":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" />
      </svg>


    case "home":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 22H22" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.4999 2.39003 13.2299 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" />
        <path d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" />
        <path d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" />
        <path d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" />
        <path d="M19.0001 7L18.9701 4H14.5701" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>


    case "instagram":
      return <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_24_21)">
          <path d="M14.375 19.375H5.625C2.875 19.375 0.625 17.125 0.625 14.375V5.625C0.625 2.875 2.875 0.625 5.625 0.625H14.375C17.125 0.625 19.375 2.875 19.375 5.625V14.375C19.375 17.125 17.125 19.375 14.375 19.375Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 14.375C12.4162 14.375 14.375 12.4162 14.375 10C14.375 7.58375 12.4162 5.625 10 5.625C7.58375 5.625 5.625 7.58375 5.625 10C5.625 12.4162 7.58375 14.375 10 14.375Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 5C15.3452 5 15.625 4.72018 15.625 4.375C15.625 4.02982 15.3452 3.75 15 3.75C14.6548 3.75 14.375 4.02982 14.375 4.375C14.375 4.72018 14.6548 5 15 5Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_24_21">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>





    case "facebook":
      return <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_24_15)">
          <path d="M14.375 19.375H5.625C2.875 19.375 0.625 17.125 0.625 14.375V5.625C0.625 2.875 2.875 0.625 5.625 0.625H14.375C17.125 0.625 19.375 2.875 19.375 5.625V14.375C19.375 17.125 17.125 19.375 14.375 19.375Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.25 10H13.125V8.25C13.125 7.8125 13.4375 7.5 13.875 7.5H15.625V4.375H13.125C11.375 4.375 10 5.75 10 7.5V10H7.5V13.125H10V19.375H13.125V13.125H15L16.25 10Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_24_15">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>



    case "linkedIn":
      return <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_24_25)">
          <path d="M14.375 19.375H5.625C2.875 19.375 0.625 17.125 0.625 14.375V5.625C0.625 2.875 2.875 0.625 5.625 0.625H14.375C17.125 0.625 19.375 2.875 19.375 5.625V14.375C19.375 17.125 17.125 19.375 14.375 19.375Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.875 8.125H4.375V15.625H6.875V8.125Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.8125 8.125C12.25 8.125 11.6875 8.3125 11.25 8.625V8.125H8.75V15.625H10H11.25V11.5625C11.25 11.0625 11.6875 10.625 12.1875 10.625C12.6875 10.625 13.125 11.0625 13.125 11.5625V15.625H15.625V10.9375C15.625 9.375 14.375 8.125 12.8125 8.125Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.625 6.25C6.31536 6.25 6.875 5.69036 6.875 5C6.875 4.30964 6.31536 3.75 5.625 3.75C4.93464 3.75 4.375 4.30964 4.375 5C4.375 5.69036 4.93464 6.25 5.625 6.25Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_24_25">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>



    case "twitter":
      return <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_24_30)">
          <path d="M18.75 3.125C18.0625 3.5625 17.375 3.9375 16.5 4.125C15.75 3.125 14.5 2.5 13.125 2.5C10.6875 2.5 8.75 4.4375 8.75 6.875C8.75 7.125 8.75 7.375 8.8125 7.625C6.0625 7.1875 3.625 5.75 1.9375 3.625C1.625 4.1875 1.4375 4.875 1.4375 5.625C1.4375 7 2.125 8.1875 3.125 8.875C2.5 8.875 1.875 8.6875 1.375 8.375V8.4375C1.375 10.375 2.6875 11.9375 4.4375 12.3125C4.125 12.375 3.75 12.4375 3.4375 12.4375C3.1875 12.4375 2.9375 12.4375 2.6875 12.375C3.1875 13.9375 4.5625 15.0625 6.25 15.125C4.9375 16.1875 3.25 16.8125 1.5 16.8125C1.1875 16.8125 0.875 16.8125 0.5625 16.75C2.25 17.875 4.25 18.5 6.4375 18.5C13.4375 18.5 17.3125 12.5625 17.375 7.375L19.375 6.25L17.5 5.625L18.75 3.125Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_24_30">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>


    case "snapchat":
      return <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_24_32)">
          <path d="M14.375 19.375H5.625C2.875 19.375 0.625 17.125 0.625 14.375V5.625C0.625 2.875 2.875 0.625 5.625 0.625H14.375C17.125 0.625 19.375 2.875 19.375 5.625V14.375C19.375 17.125 17.125 19.375 14.375 19.375Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 3.125C9.3125 3.125 8.9375 3.1875 8.25 3.5C7.125 4 6.4375 4.9375 6.3125 6.1875C6.25 6.875 6.3125 7.625 6.3125 8.3125C6.3125 8.5625 6.1875 8.6875 5.9375 8.5625C5.8125 8.5 5.6875 8.4375 5.625 8.4375C5.375 8.375 5.125 8.3125 4.875 8.25C4.6875 8.25 4.5 8.3125 4.4375 8.5C4.375 8.6875 4.375 8.875 4.5 9C4.625 9.125 4.75 9.25 4.875 9.3125C5.1875 9.5625 5.5 9.75 5.8125 9.9375C6.0625 10.125 6.125 10.375 6.0625 10.6875C5.9375 11.3125 5.625 11.875 5.25 12.3125C4.6875 12.9375 4.0625 13.375 3.3125 13.75C3.0625 13.875 3.0625 14 3.3125 14.125C3.625 14.25 3.9375 14.375 4.25 14.5C4.5625 14.625 4.9375 14.625 5 15.0625C5.0625 15.5625 5.1875 15.5 5.5625 15.5625C5.6875 15.5625 5.75 15.5625 5.875 15.5625C6.5625 15.5625 7.25 15.75 7.875 16.125C8.25 16.375 8.625 16.5625 9 16.6875C10 17 11 16.875 11.875 16.25C12.5625 15.75 13.375 15.5625 14.1875 15.5625C14.3125 15.5625 14.4375 15.5 14.625 15.5C14.875 15.5 14.9375 15.375 15 15.125C15 14.8125 15.1875 14.6875 15.4375 14.5625C15.875 14.4375 16.25 14.25 16.6875 14.0625C16.75 14.0625 16.875 13.9375 16.875 13.875C16.875 13.8125 16.75 13.75 16.6875 13.6875C16.3125 13.4375 15.875 13.25 15.5 12.9375C14.75 12.375 14.1875 11.625 13.875 10.75C13.75 10.375 13.8125 10.1875 14.125 9.9375C14.25 9.8125 14.4375 9.75 14.5625 9.625C14.875 9.4375 15.125 9.1875 15.4375 9C15.5625 8.875 15.625 8.6875 15.5625 8.5C15.5 8.3125 15.3125 8.25 15.1875 8.25C15 8.25 14.875 8.3125 14.6875 8.3125C14.4375 8.375 14.25 8.5 14.0625 8.5625C13.875 8.625 13.6875 8.5 13.75 8.3125C13.8125 7.5625 13.8125 6.8125 13.75 6.125C13.6875 5.4375 13.375 4.8125 12.9375 4.3125C12.0625 3.5 11.125 3.125 10 3.125Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_24_32">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>


    case "messenger":
      return <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_24_18)">
          <path d="M10 1.25C4.8125 1.25 0.625 5 0.625 9.6875C0.625 12.375 2 14.75 4.1875 16.3125L4.375 18.75C4.375 19.0625 4.75 19.25 5 19.0625L7.375 17.75C8.25 18 9.125 18.125 10.0625 18.125C15.25 18.125 19.4375 14.375 19.4375 9.6875C19.4375 5 15.1875 1.25 10 1.25Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.81251 8.68752L4.43751 11.8125C4.25001 12.0625 4.50001 12.375 4.81251 12.25L7.81251 10.75C7.87501 10.6875 8.00001 10.6875 8.06251 10.75L10.4375 11.9375C11.375 12.4375 12.5625 12.125 13.25 11.25L15.625 8.12502C15.8125 7.87502 15.5625 7.56252 15.25 7.68752L12.25 9.18752C12.1875 9.25002 12.0625 9.25002 12 9.18752L9.62501 8.00002C8.62501 7.56252 7.43751 7.81252 6.81251 8.68752Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_24_18">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>


    case "phone-social":
      return <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_24_7)">
          <path d="M13.5625 12.5625C13.75 12 13.75 11.5625 13.6875 11.4375C13.625 11.3125 13.5 11.3125 13.25 11.1875C13 11.0625 11.875 10.5 11.6875 10.4375C11.5 10.375 11.25 10.375 11.125 10.625C10.875 10.9375 10.6875 11.25 10.5 11.4375C10.375 11.5625 10.125 11.625 9.9375 11.5C9.6875 11.375 8.9375 11.125 8.0625 10.375C7.375 9.75 6.9375 9 6.75 8.75C6.625 8.5 6.75 8.375 6.875 8.25C7 8.125 7.125 8 7.25 7.875C7.375 7.75 7.4375 7.6875 7.5 7.5C7.5625 7.375 7.5 7.1875 7.4375 7.0625C7.375 6.9375 6.9375 5.8125 6.75 5.375C6.625 5.0625 6.5 5.0625 6.25 5.0625C6.1875 5 6.0625 5 6 5C5.6875 5 5.375 5.0625 5.1875 5.3125C4.9375 5.5625 4.375 6.125 4.375 7.25C4.375 8.375 5.1875 9.5 5.3125 9.625C5.4375 9.75 6.9375 12.125 9.25 13.125C11.0625 13.875 11.625 13.8125 12 13.75C12.625 13.5625 13.375 13.125 13.5625 12.5625Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 0.625C4.8125 0.625 0.625 1.8125 0.625 8.75C0.625 13.25 2.375 15.3125 5 16.25V19C5 19.375 5.4375 19.5625 5.75 19.3125L8.1875 16.875C8.75 16.875 9.375 16.875 10 16.875C15.1875 16.875 19.375 15.6875 19.375 8.75C19.375 1.8125 15.1875 0.625 10 0.625Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.6875 7C10.5 7 11.125 7.625 11.125 8.4375" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.6875 3.125C12.625 3.125 15 5.5 15 8.4375" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.6875 5.0625C11.5625 5.0625 13.0625 6.5625 13.0625 8.4375" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_24_7">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>


    case "whatsapp":
      return <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_24_2)">
          <path d="M10.625 0.625C5.8125 0.625 1.875 4.5625 1.875 9.375C1.875 11.5 2.6875 13.5 3.9375 15L2.5 19.375L7.0625 17.375C8.125 17.875 9.375 18.125 10.625 18.125C15.4375 18.125 19.375 14.1875 19.375 9.375C19.375 4.5625 15.4375 0.625 10.625 0.625Z" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.4375 12.5625C15.625 12 15.625 11.5625 15.5625 11.4375C15.5 11.3125 15.375 11.3125 15.125 11.1875C14.875 11.0625 13.75 10.5 13.5625 10.4375C13.375 10.375 13.125 10.375 13 10.625C12.75 10.9375 12.5625 11.25 12.375 11.4375C12.25 11.5625 12 11.625 11.8125 11.5C11.5625 11.375 10.8125 11.125 9.9375 10.375C9.25 9.75 8.8125 9 8.625 8.75C8.5 8.5 8.625 8.375 8.75 8.25C8.875 8.125 9 8 9.125 7.875C9.25 7.75 9.3125 7.6875 9.375 7.5C9.4375 7.375 9.375 7.1875 9.3125 7.0625C9.25 6.9375 8.8125 5.8125 8.625 5.375C8.5 5 8.375 5 8.125 5C8.0625 5 7.9375 5 7.875 5C7.5625 5 7.25 5.0625 7.0625 5.3125C6.8125 5.5625 6.25 6.125 6.25 7.25C6.25 8.375 7.0625 9.5 7.1875 9.625C7.3125 9.75 8.8125 12.125 11.125 13.125C12.9375 13.875 13.5 13.8125 13.875 13.75C14.5 13.5625 15.25 13.125 15.4375 12.5625Z" stroke={color} strokeWidth="1" />
        </g>
        <defs>
          <clipPath id="clip0_24_2">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>

    case "location":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z" stroke={color} strokeWidth="1.5" />
        <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke={color} strokeWidth="1.5" />
      </svg>


    case "time":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.24 2H8.76004C5.00004 2 4.71004 5.38 6.74004 7.22L17.26 16.78C19.29 18.62 19 22 15.24 22H8.76004C5.00004 22 4.71004 18.62 6.74004 16.78L17.26 7.22C19.29 5.38 19 2 15.24 2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>


    case "redirect":
      return <svg width={width} height={height} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.58008 4.15997H15.4201C17.0801 4.15997 18.4201 5.49997 18.4201 7.15997V10.48" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.74008 1L1.58008 4.15997L4.74008 7.32001" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4201 17.84H4.58008C2.92008 17.84 1.58008 16.5 1.58008 14.84V11.52" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.2603 21L18.4203 17.84L15.2603 14.68" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "text":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.99146 5.92995V4.41995C1.99146 3.39995 2.82146 2.56995 3.84145 2.56995H16.7615C17.7815 2.56995 18.6115 3.39995 18.6115 4.41995V5.92995" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3015 18.0999V3.31995" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.90149 18.1H12.4815" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.6815 10.34H20.6915C21.4215 10.34 22.0115 10.93 22.0115 11.66V12.46" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.0814 21.43V10.87" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9414 21.4301H18.2214" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "desktop":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.44 2H17.55C21.11 2 22 2.89 22 6.44V12.77C22 16.33 21.11 17.21 17.56 17.21H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17.22V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 13H22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 22H16.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "tablet":
      return <svg width={width} height={height} viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.44 1H16.55C20.11 1 21 1.89 21 5.44V11.77C21 15.33 20.11 16.21 16.56 16.21H5.44C1.89 16.22 1 15.33 1 11.78V5.44C1 1.89 1.89 1 5.44 1Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "mobile":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7V17C20 21 19 22 15 22H9C5 22 4 21 4 17V7C4 3 5 2 9 2H15C19 2 20 3 20 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 5.5H10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19.1C12.856 19.1 13.55 18.406 13.55 17.55C13.55 16.694 12.856 16 12 16C11.1439 16 10.45 16.694 10.45 17.55C10.45 18.406 11.1439 19.1 12 19.1Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "edit":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.9102 4.15002C15.5802 6.54002 17.4502 8.41002 19.8502 9.09002" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    case "check":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill={color} />
      </svg>


    case "uncheck":
      return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill={color} />
      </svg>


    default:
      return null;
  }
};

export default Svg;
