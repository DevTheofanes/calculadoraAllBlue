import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin:0 auto;
  color: #fff;
  width: 680px;
  box-sizing: border-box;  
  background-color: #121212;

  
  .title{
    width: 100%;
    margin: 0;
    padding: 1rem 0;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    text-transform: uppercase;
    background-color: #4AA3DC;
  }

  .subtitle{
    color: #fff;
    margin: 1rem 0;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
  }

  .form{
    width: 100%;
  }

  .titleCategory{
    color: #fff;
    margin: 1rem 0;
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    
    /* padding: 1rem 0rem;
    width: 100%;
    text-align: center;
    background-color: #7B84C5; */
    font-family: Verdana, sans-serif;
    color: #2FBECF;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 2rem !important;
  }

  .formItem{
    padding: 0 6rem;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .formItemText{
    width: 42%;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    margin-right: 8px;
  }

  .formItemInput{
    width: 50%;
    height: 1.5rem;
    font-family: 'Poppins', sans-serif;
    padding: 0 0.5rem;
  }

  .formItemSelect{
    width: 54%;
    height: 1.75rem;
    padding: 0 0.5rem;
    font-family: 'Poppins', sans-serif;
  }

  .attributes{
    width: 100%;
    margin: 2rem 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .attributesContent{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .attributesItem{
    width: 72%;
    padding: 0.25rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
      font-weight: 600;
    }
  }

  .attributesItemText{
    color: #fff;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
  }

  .attributesNormalText{
    margin-left: 5px;
    font-weight: normal !important;
  }

  .attributesBonusEdcText{
    margin-left: 5px;
    font-weight: normal !important;
    color: #ff6600;
  }

  .attributesBonusRacialText{
    margin-left: 5px;
    font-weight: normal !important;
    color: #99cc00;
  }

  .attributesScale{
    margin-left: 5px;
    font-weight: normal !important;
  }
`;