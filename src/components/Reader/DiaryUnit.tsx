import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import { FullDiary } from '../../interface/database.interface'
export const DiaryUnit = (props: { diary: FullDiary }) => {
  const { title, createDate, updateDate, content } = props.diary
  const fullDate = props.diary.date

  const [date, month, year] = moment(fullDate)
    .format('DD-MMM-YYYY')
    .split('-')

  return (
    <Article>
      <h1>
        <span>{date}</span>
        <span>{month}</span>
        <span>{year}</span>
      </h1>
      <div className="container">
        <header>{title}</header>
        <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>

      <div className="footer">
        诞生于:「{createDate}」 最后更新于:「{updateDate}」
      </div>
    </Article>
  )
}
export default DiaryUnit

const Article = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  max-width: 680px;

  h1 {
    padding: 0;
    margin: 0 0 -14px 15px;
    * {
      vertical-align: top;
      line-height: 1em;
      padding: 4px;
      display: inline-block;
    }
    *:nth-child(1) {
      font-size: 1.5em;
      margin-top: -5px;
    }
    *:nth-child(2) {
      font-size: 0.7em;
    }
    *:nth-child(3) {
      font-size: 0.7em;
    }
    *:nth-child(4) {
      /*margin-top: 10px;*/
      font-size: 0.25em;
      box-shadow: none;
      float: right;
    }
    *:nth-child(4):hover {
      box-shadow: none;
    }
  }
  header {
    vertical-align: baseline;
    padding: 8px 0;
  }
  .container {
    padding-left: 70px;
    .content {
      p {
        padding: 8px 0;
        font: inherit;
        vertical-align: baseline;
      }
      img {
        max-width:610px;
      }
    }

  }
  .footer {
    padding-top: 10px;
    float: right;
  }
`
