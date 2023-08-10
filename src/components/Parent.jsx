import React, { useState } from 'react'
import "./Parent.css"
import CountText from './CountText'
import TextArea from './TextArea'
import Button from './Button'
function Parent() {

    // hàm lấy giá trị ô textarea

    const [text, setText] = useState('');
    

    const handleTextChange = (event) => {
        const newText = event.target.value;
        setText(newText);
    };

      
     
      
    // Đếm số lượng từ
        const cleanedText = text.trim();
        const words = cleanedText.split(/\s+/);
        const lengthText = words.length
        
    // Đếm chữ cái
        const TextLetter = text.replace(/\s/g, '');
        const countLetter = TextLetter.length;

    // Đếm số đoạn văn bản
        const paragraphs = text.split('\n');
        const paragraphNumber = paragraphs.length;
      
  return (
    <div className='container'>
        <h2>Word Counter</h2>

        <CountText lengthText={lengthText} countLetter={countLetter} paragraphNumber={paragraphNumber}/>

        <TextArea text={text} handleTextChange={handleTextChange}/>

        <Button />

    </div>
  )
}

export default Parent