import {css} from "styled-components"


export const md = (props) => {
  return css`
  @media (max-width:768px){
   ${props}
  }
  `
}

export const mobilemd = (props) => {
  return css`
  @media (max-width:770px){
   ${props}
  }
  `
}



export const mobilesm = (props) => {
  return css`
  @media (max-width:358px){
   ${props}
  }
  `
}




export const cartmd = (props) => {
  return css`
  @media (max-width:954px){
   ${props}
  }
  `
}