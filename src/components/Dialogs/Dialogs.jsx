import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

function DialogsItem(props) {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

function Message(props) {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

function Dialogs(props) {

  let dialogData = [
    {id:1, name: 'Max'},
    {id:2, name: 'Lena'},
    {id:3, name: 'Kass'},
    {id:4, name: 'Rem'},
    {id:5, name: 'Sam'},
    {id:6, name: 'Nill'},
    {id:7, name: 'Erica'},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogsItem name={dialogData[0].name} id='1'/>
        <DialogsItem name='Lena' id='2'/>
        <DialogsItem name='Kass' id='3'/>
        <DialogsItem name='Rem' id='4'/>
        <DialogsItem name='Sam' id='5'/>
      </div>
        <div className={s.messages}>
          <Message message='Hello world!'/>
          <Message message='I love hentai'/>
          <Message message='What are ypu doing?'/>
          <Message message='Hey'/>
          <Message message='Hello world!'/>
      </div>
    </div>
  );
}

export default Dialogs;
