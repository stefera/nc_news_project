import { FormEvent, MouseEvent } from "react"

export type Article = {
    body : string,
    article_id : number,
    article_img_url : string,
    author: string,
    title: string,
    created_at: string
  }

  export type Comment = {
    created_at: string,
    author: string,
    body:string,
    comment_id:number
  }

  export type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

  export type FormSubmitHandler = (event:FormEvent<HTMLFormElement>) => void;

