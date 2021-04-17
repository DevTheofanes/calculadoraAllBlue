import { useState, useEffect } from 'react'
import { Container } from './styles'

export function App() {
  const [xpTotal, setXpTotal] = useState(0)
  const [breedSelected, setBreedSelected] = useState("")
  const [optionsBonus, setOptionsBonus]:any = useState([])
  const [breedBonusSelected, setBreedBonusSelected] = useState("")
  const [styleFigthSelected, setStyleFigthSelected] = useState("")
  
  const [forca, setForca] = useState("")
  const [destreza, setDestreza] = useState("")
  const [acerto, setAcerto] = useState("")
  const [reflexo, setReflexo] = useState("")
  const [constituicao, setConstituicao] = useState("")

  const [forcaBonusBreed, setForcaBonusBreed] = useState(0)
  const [destrezaBonusBreed, setDestrezaBonusBreed] = useState(0)
  const [acertoBonusBreed, setAcertoBonusBreed] = useState(0)
  const [reflexoBonusBreed, setReflexoBonusBreed] = useState(0)
  const [constituicaoBonusBreed, setConstituicaoBonusBreed] = useState(0)
         
  const [forcaBonusFight, setForcaBonusFight] = useState(0)
  const [destrezaBonusFight, setDestrezaBonusFight] = useState(0)
  const [acertoBonusFight, setAcertoBonusFight] = useState(0)
  const [reflexoBonusFight, setReflexoBonusFight] = useState(0)
  const [constituicaoBonusFight, setConstituicaoBonusFight] = useState(0)
  
  const [forcaFinal, setForcaFinal] = useState(0)
  const [destrezaFinal, setDestrezaFinal] = useState(0)
  const [acertoFinal, setAcertoFinal] = useState(0)
  const [reflexoFinal, setReflexoFinal] = useState(0)
  const [constituicaoFinal, setConstituicaoFinal] = useState(0)

  const [forcaFinalScale, setForcaFinalScale] = useState("Incompentente")
  const [destrezaFinalScale, setDestrezaFinalScale] = useState("Incompentente")
  const [acertoFinalScale, setAcertoFinalScale] = useState("Incompentente")
  const [reflexoFinalScale, setReflexoFinalScale] = useState("Incompentente")
  const [constituicaoFinalScale, setConstituicaoFinalScale] = useState("Incompentente")
  
  const [counterXp, setCounterXp] = useState(0)

  function calculateAtributte(){
    const total = Number(forca) + Number(destreza) + Number(acerto) + Number(reflexo) + Number(constituicao)

    const newCounterXp = xpTotal - total;
    setCounterXp(newCounterXp)
  }

  function updateAtributo(e:any, valuePast: string, setFunction: any){
    let value = Number(e.target.value);

    if(value < 0){
      return
    }

    if(Number(valuePast) > 0){
      const valueEddited = value - Number(valuePast);

      if(valueEddited > counterXp){
        return
      }

      setFunction(value)
      return 
    }

    if(value > counterXp){
      return
    }

    // const newCounterXp = counterXp - Number(value)
    // setCounterXp(newCounterXp)
    setFunction(value)
  }

  
  function updateOptionsBonusBreed(){
    switch (breedSelected) {
      case "Code2FD2A4R":
        setOptionsBonus([
          {
            code: "Code2F2A4R",
            message: "2 em FOR e 2 em ACT e 4 em REF"
          }, 
          {
            code: "Code2D2A4R",
            message: "2 em DES e 2 em ACT e 4 em REF"
          }
        ])
        setBreedBonusSelected("Code2F2A4R")
        break;

      case "Code4FD2A2C":
        setOptionsBonus([
          {
            code: "Code4F2A2C",
            message: "4 em FOR e 2 em ACT e 2 em CON"
          }, 
          {
            code: "Code4D2A2C",
            message: "4 em DES e 2 em ACT e 2 em CON"
          }
        ])
        setBreedBonusSelected("Code4F2A2C")
        break;
    
      case "Code4FD4A":
        setOptionsBonus([
          {
            code: "Code4F4A",
            message: "4 em FOR e 4 em ACT"
          }, 
          {
            code: "Code4D4A",
            message: "4 em DES e 4 em ACT"
          }
        ])
        setBreedBonusSelected("Code4F4A")
        break;

      case "Code6F6A6C":
        setOptionsBonus([
          {
            code: "Code6F6A6C",
            message: "6 em FOR e 6 em ACT e 6 em CON"
          }, 
        ])
        setBreedBonusSelected("Code6F6A6C")
        break;
    
      case "Code2FD4A2R":
        setOptionsBonus([
          {
            code: "Code2F4A2R",
            message: "2 em FOR e 4 em ACT e 2 em REF"
          }, 
          {
            code: "Code2D4A2R",
            message: "2 em DES e 4 em ACT e 2 em REF"
          }
        ])
        setBreedBonusSelected("Code2F4A2R")
        break;
      
      case "Code4FD4A4R":
        setOptionsBonus([
          {
            code: "Code4F4A4R",
            message: "4 em FOR e 4 em ACT e 4 em REF"
          }, 
          {
            code: "Code4D4A4R",
            message: "4 em DES e 4 em ACT e 4 em REF"
          }
        ])
        setBreedBonusSelected("Code4F4A4R")
        break;
      
      case "Code2FD4A6R":
        setOptionsBonus([
          {
            code: "Code2F4A6R",
            message: "2 em FOR e 4 em ACT e 6 em REF"
          }, 
          {
            code: "Code2D4A6R",
            message: "2 em DES e 4 em ACT e 6 em REF"
          }
        ])
        setBreedBonusSelected("Code2F4A6R")
        break;
      
      case "Code3FD3R6C":
        setOptionsBonus([
          {
            code: "Code3F3R6C",
            message: "3 em FOR e 3 em REF e 6 em COS"
          }, 
          {
            code: "Code3D3R6C",
            message: "3 em DES e 3 em REF e 6 em COS"
          }
        ])
        setBreedBonusSelected("Code3F3R6C")
        break;
        
      case "Code4FD4R4C":
        setOptionsBonus([
          {
            code: "Code4F4R4C",
            message: "4 em FOR e 4 em REF e 4 em COS"
          }, 
          {
            code: "Code4D4R4C",
            message: "4 em DES e 4 em REF e 4 em COS"
          }
        ])
        setBreedBonusSelected("Code4F4R4C")
        break;

      case "Code4FD6A2R":
        setOptionsBonus([
          {
            code: "Code4F6A2R",
            message: "4 em FOR e 6 em ACT e 2 em REF"
          }, 
          {
            code: "Code4D6A2R",
            message: "4 em DES e 6 em ACT e 2 em REF"
          }
        ])
        setBreedBonusSelected("Code4F6A2R")
        break;
      
      case "Code6FD6C":
        setOptionsBonus([
          {
            code: "Code6F6C",
            message: "6 em FOR e 6 em COS"
          }, 
          {
            code: "Code6D6C",
            message: "6 em DES e 6 em COS"
          }
        ])
        setBreedBonusSelected("Code6F6C")
        break;

      case "Code4FD4A4C":
        setOptionsBonus([
          {
            code: "Code4F4A4C",
            message: "4 em FOR e 4 em ACT e 4 em COS"
          }, 
          {
            code: "Code4D4A4C",
            message: "4 em DES e 4 em ACT e 4 em COS"
          }
        ]) 
        setBreedBonusSelected("Code4F4A4C")
        break;

      case "Code4FD2A6C":
        setOptionsBonus([
          {
            code: "Code4F2A6C",
            message: "4 em FOR e 2 em ACT e 6 em COS"
          }, 
          {
            code: "Code4D2A6C",
            message: "4 em DES e 2 em ACT e 6 em COS"
          }
        ])
        setBreedBonusSelected("Code4F2A6C")
        break;
      
      case "Code4R8C":
        setOptionsBonus([
          {
            code: "Code4R8C",
            message: "4 em REF e 8 em COS"
          }
        ])
        setBreedBonusSelected("Code4R8C")
        break;

      case "Code4A4R4C":
        setOptionsBonus([
          {
            code: "Code4A4R4C",
            message: "4 em ACT e 4 em REF e 4 em COS"
          }, 
        ])
        setBreedBonusSelected("Code4A4R4C")
        break;
        
      case "Code4FD2A2R":
        setOptionsBonus([
          {
            code: "Code4F2A2R",
            message: "4 em FOR e 2 em ACT e 2 em REF"
          }, 
          {
            code: "Code4D2A2R",
            message: "4 em DES e 2 em ACT e 2 em REF"
          }
        ])
        setBreedBonusSelected("Code4F2A2R")
        break;

      default:
        break;
    }
  }


  function updateBonusBreed(){
    const bonus6F = breedBonusSelected.indexOf("6F") > 1;
    const bonus6D = breedBonusSelected.indexOf("6D") > 1;
    const bonus6A = breedBonusSelected.indexOf("6A") > 1;
    const bonus6R = breedBonusSelected.indexOf("6R") > 1;
    const bonus6C = breedBonusSelected.indexOf("6C") > 1;

    const bonus4F = breedBonusSelected.indexOf("4F") > 1;
    const bonus4D = breedBonusSelected.indexOf("4D") > 1;
    const bonus4A = breedBonusSelected.indexOf("4A") > 1;
    const bonus4R = breedBonusSelected.indexOf("4R") > 1;
    const bonus4C = breedBonusSelected.indexOf("4C") > 1;

    const bonus3F = breedBonusSelected.indexOf("3F") > 1;
    const bonus3D = breedBonusSelected.indexOf("3D") > 1;
    const bonus3A = breedBonusSelected.indexOf("3A") > 1;
    const bonus3R = breedBonusSelected.indexOf("3R") > 1;
    const bonus3C = breedBonusSelected.indexOf("3C") > 1;

    const bonus2F = breedBonusSelected.indexOf("2F") > 1;
    const bonus2D = breedBonusSelected.indexOf("2D") > 1;
    const bonus2A = breedBonusSelected.indexOf("2A") > 1;
    const bonus2R = breedBonusSelected.indexOf("2R") > 1;
    const bonus2C = breedBonusSelected.indexOf("2C") > 1;

    //Bonus 6
    if(bonus6F){
      setForcaBonusBreed(6)
    }

    if(bonus6D){
      setDestrezaBonusBreed(6)
    }

    if(bonus6A){
      setAcertoBonusBreed(6)
    }

    if(bonus6R){
      setReflexoBonusBreed(6)
    }

    if(bonus6C){
      setConstituicaoBonusBreed(6)
    }

    //Bonus 4
    if(bonus4F){
      setForcaBonusBreed(4)
    }

    if(bonus4D){
      setDestrezaBonusBreed(4)
    }

    if(bonus4A){
      setAcertoBonusBreed(4)
    }

    if(bonus4R){
      setReflexoBonusBreed(4)
    }

    if(bonus4C){
      setConstituicaoBonusBreed(4)
    }

    //Bonus 3
    if(bonus3F){
      setForcaBonusBreed(3)
    }

    if(bonus3D){
      setDestrezaBonusBreed(3)
    }

    if(bonus3A){
      setAcertoBonusBreed(3)
    }

    if(bonus3R){
      setReflexoBonusBreed(3)
    }

    if(bonus3C){
      setConstituicaoBonusBreed(3)
    }

    //Bonus 2
    if(bonus2F){
      setForcaBonusBreed(2)
    }

    if(bonus2D){
      setDestrezaBonusBreed(2)
    }

    if(bonus2A){
      setAcertoBonusBreed(2)
    }

    if(bonus2R){
      setReflexoBonusBreed(2)
    }

    if(bonus2C){
      setConstituicaoBonusBreed(2)
    }
  }

  function updateBonusStyleFight(){
    const bonus3F = styleFigthSelected.indexOf("3F") > 1;
    const bonus3D = styleFigthSelected.indexOf("3D") > 1;
    const bonus3A = styleFigthSelected.indexOf("3A") > 1;
    const bonus3R = styleFigthSelected.indexOf("3R") > 1;
    const bonus3C = styleFigthSelected.indexOf("3C") > 1;

    const bonus2F = styleFigthSelected.indexOf("2F") > 1;
    const bonus2D = styleFigthSelected.indexOf("2D") > 1;
    const bonus2A = styleFigthSelected.indexOf("2A") > 1;
    const bonus2R = styleFigthSelected.indexOf("2R") > 1;
    const bonus2C = styleFigthSelected.indexOf("2C") > 1;

    if(bonus3F){
      setForcaBonusFight(3)
    }

    if(bonus3D){
      setDestrezaBonusFight(3)
    }

    if(bonus3A){
      setAcertoBonusFight(3)
    }

    if(bonus3R){
      setReflexoBonusFight(3)
    }

    if(bonus3C){
      setConstituicaoBonusFight(3)
    }

    //Bonus 2
    if(bonus2F){
      setForcaBonusFight(2)
    }

    if(bonus2D){
      setDestrezaBonusFight(2)
    }

    if(bonus2A){
      setAcertoBonusFight(2)
    }

    if(bonus2R){
      setReflexoBonusFight(2)
    }

    if(bonus2C){
      setConstituicaoBonusFight(2)
    }
  }

  function handleScaleAttributes(value: any, setValue :any){
    const scaleIncompetente = value === 0;
    const scaleRegular = value > 0 && value < 21;
    const scaleHabil = value > 20 && value < 51;
    const scaleTalentoso = value > 50 && value < 101;
    const scalePerito = value > 100 && value < 201;
    const scaleExtravagante = value > 200 && value < 301;
    const scaleMagnifico = value > 300 && value < 401;
    const scaleAnormal = value > 400 && value < 501;
    const scaleSingular = value > 500 && value < 600;
    const scaleSupremo = value >= 600;

    if(scaleIncompetente){
      setValue("Incompetente")
    }

    if(scaleRegular){
      setValue("Regular")
    }

    if(scaleHabil){
      setValue("Hábil")
    }

    if(scaleTalentoso){
      setValue("Talentoso")
    }

    if(scalePerito){
      setValue("Perito")
    }

    if(scaleExtravagante){
      setValue("Extravagante")
    }

    if(scaleMagnifico){
      setValue("Magnífico")
    }

    if(scaleAnormal){
      setValue("Anormal")
    }

    if(scaleSingular){
      setValue("Singular")
    }

    if(scaleSupremo){
      setValue("Supremo")
    }
  }

  useEffect(() => {
    calculateAtributte()
  }, [forca, destreza, acerto, reflexo, constituicao])

  useEffect(() => {
    if(xpTotal < counterXp){
      setForca("")
      setDestreza("")
      setAcerto("")
      setReflexo("")
      setConstituicao("")
    }

    setCounterXp(xpTotal)
  }, [xpTotal])

  useEffect(() => {
    setForcaBonusFight(0)
    setDestrezaBonusFight(0)
    setAcertoBonusFight(0)
    setReflexoBonusFight(0)
    setConstituicaoBonusFight(0)

    updateBonusStyleFight()
  }, [styleFigthSelected])

  useEffect(() => {
    updateOptionsBonusBreed()
  }, [breedSelected])

  useEffect(() => {
    setForcaBonusBreed(0)
    setDestrezaBonusBreed(0)
    setAcertoBonusBreed(0)
    setReflexoBonusBreed(0)
    setConstituicaoBonusBreed(0)

    updateBonusBreed()
  }, [breedBonusSelected])

  useEffect(() =>{
    const forcaFinal = Number(forca) + Number(forcaBonusBreed) + Number(forcaBonusFight)
    const destrezaFinal = Number(destreza) + Number(destrezaBonusBreed) + Number(destrezaBonusFight)
    const acertoFinal = Number(acerto) + Number(acertoBonusBreed) + Number(acertoBonusFight)
    const reflexoFinal = Number(reflexo) + Number(reflexoBonusBreed) + Number(reflexoBonusFight)
    const constituicaoFinal = Number(constituicao) + Number(constituicaoBonusBreed) + Number(constituicaoBonusFight)

    setForcaFinal(forcaFinal)
    setDestrezaFinal(destrezaFinal)
    setAcertoFinal(acertoFinal)
    setReflexoFinal(reflexoFinal)
    setConstituicaoFinal(constituicaoFinal)

    console.log("FORCA")
    handleScaleAttributes(forcaFinal, setForcaFinalScale);
    console.log("DESTREZA")
    handleScaleAttributes(destrezaFinal, setDestrezaFinalScale);
    console.log("ACERTO")
    handleScaleAttributes(acertoFinal, setAcertoFinalScale);
    console.log("REFLEXO")
    handleScaleAttributes(reflexoFinal, setReflexoFinalScale);
    console.log("CONSTITUICAO")
    handleScaleAttributes(constituicaoFinal, setConstituicaoFinalScale);

  }, [
      forca, 
      destreza, 
      acerto, 
      reflexo, 
      constituicao, 
      forcaBonusBreed, 
      destrezaBonusBreed, 
      acertoBonusBreed, 
      reflexoBonusBreed, 
      constituicaoBonusBreed,
      forcaBonusFight, 
      destrezaBonusFight, 
      acertoBonusFight, 
      reflexoBonusFight, 
      constituicaoBonusFight,
    ])

  return (
    <Container>
      <h1 className="title">Calculadora</h1>
      
      <p className="subtitle">
        Essa ferramenta foi feita por Arthur com objetivo de facilitar a criação das fichas.
      </p>
      
      <div className="form">
        <h3 className="titleCategory">
          Preencha os campos a seguir
        </h3>
        <div className="formItem">
          <span className="formItemText">Seus pontos em xp :</span>
          <input className="formItemInput" type="number" value={xpTotal} onChange={(e) => setXpTotal(Number(e.target.value))}/>
        </div>
        <div className="formItem">
          <span className="formItemText">Selecione sua raça :</span>
          <select className="formItemSelect" name="select" onChange={e => setBreedSelected(e.target.value)}>
            <option value="CodeIndefinido">Humano</option>
            <option value="Code2FD2A4R">Celestial</option>
            <option value="Code4FD2A2C">Braços longos</option>
            <option value="Code4FD2A2C">Pernas longas</option>
            <option value="Code4FD4A">Pescoço de cobra</option>
            <option value="Code6F6A6C">Meio gigante</option>
            <option value="Code2FD4A2R">Três olhos</option>
            <option value="Code4FD4A4R">Mink Roedor</option>
            <option value="Code2FD4A6R">Mink Felino</option>
            <option value="Code3FD3R6C">Mink Bovino</option>
            <option value="Code4FD4R4C">Mink Suino</option>
            <option value="Code4FD4A4R">Mink Simio</option>
            <option value="Code4FD6A2R">Mink Canino</option>
            <option value="Code6FD6C">Mink ursídeo</option>
            <option value="Code4FD4A4C">Mink equídeo</option>
            <option value="Code4FD4A4R">Mink caprino</option>
            <option value="Code4FD4A4R">Mink marsupiai</option>
            <option value="Code4FD2A6C">Mink folívoro</option>
            <option value="Code2FD2A4R">Anões</option>
            <option value="Code4FD4R4C">Homem tubarão serra</option>
            <option value="Code4FD4A4R">Homem peixe kisu</option>
            <option value="Code4FD4A4R">Homem polvo</option>
            <option value="Code4FD4A4C">Homem arraia</option>
            <option value="Code4FD4A4C">Homem carpa</option>
            <option value="Code4FD4R4C">Homem salmão</option>
            <option value="Code4FD4A4R">Homem enguia pelicano</option>
            <option value="Code4FD4A4C">Homem peixe dourado</option>
            <option value="Code4FD4R4C">Homem aruanã</option>
            <option value="Code4FD4A4R">Homem peixe espada</option>
            <option value="Code4R8C">Homem peixe boi</option>
            <option value="Code6FD6C">Homem tubarão baleia</option>
            <option value="Code4FD4A4R">Homem congro bicudo</option>
            <option value="Code4FD4A4C">Homem tubarão branco</option>
            <option value="Code4FD4A4R">Homem tubarão martelo</option>
            <option value="Code4FD4A4C">Homem tubarão tapete</option>
            <option value="Code4FD4A4R">Homem tubarão charuto</option>
            <option value="Code4A4R4C">Homem lula</option>
            <option value="Code6FD6C">Homem peixe baiacu tigre</option>
            <option value="Code4FD4A4R">Sereia</option>
            <option value="Code4FD4A4R">Tritão</option>
            <option value="Code4FD2A2R">Hibrido</option>
          </select>
        </div>
        <div className="formItem">
          <span className="formItemText">Bonificação da raça :</span>
          <select className="formItemSelect" name="select" onChange={e => setBreedBonusSelected(e.target.value)}>
            {
              optionsBonus.map((option : any) =>{
                return <option key={option.code} value={option.code}>{option.message}</option>
              })
            }
          </select>
        </div>
        
        <div className="formItem">
          <span className="formItemText">Bonificação do estilo de combate :</span>
          <select className="formItemSelect" name="select" onChange={e => setStyleFigthSelected(e.target.value)}>
            <option value="valor1"></option>
            <option value="Code3F3D">3x em FOR e 3x DES</option>
            <option value="Code3F3A">3x em FOR e 3x ACT</option>
            <option value="Code3F3R">3x em FOR e 3x REF</option>
            {/* <option value="Code3F3C">3x em FOR e 3x CON</option> */}
            <option value="Code3D3A">3x em DES e 3x ACT</option>
            <option value="Code3D3R">3x em DES e 3x REF</option>
            {/* <option value="Code3D3C">3x em DES e 3x CON</option> */}
            <option value="Code3A3R">3x em ACT e 3x REF</option>
            {/* <option value="Code3A3C">3x em ACT e 3x CON</option> */}
            {/* <option value="Code3R3C">3x em REF e 3x CON</option> */}
            <option value="Code2F2D2A">2x em FOR e 2x DES e 2x ACT</option>
            <option value="Code2F2D2R">2x em FOR e 2x DES e 2x REF</option>
            {/* <option value="Code2F2D2C">2x em FOR e 2x DES e 2x CON</option> */}
            <option value="Code2F2A2R">2x em FOR e 2x ACT e 2x REF</option>
            {/* <option value="Code2F2A2C">2x em FOR e 2x ACT e 2x CON</option>
            <option value="Code2F2R2C">2x em FOR e 2x REF e 2x CON</option> */}
            <option value="Code2D2A2R">2x em DES e 2x ACT e 2x REF</option>
            {/* <option value="Code2D2A2C">2x em DES e 2x ACT e 2x CON</option>
            <option value="Code2D2R2C">2x em DES e 2x REF e 2x CON</option>
            <option value="Code2A2R2C">2x em ACT e 2x REF e 2x CON</option> */}
          </select>
        </div>
        
        <div className="formItem">
          <span className="formItemText">Pontos em Força :</span>
          <input className="formItemInput" type="number" value={forca} onChange={(e) => updateAtributo(e, forca, setForca)}/>
        </div>
        
        <div className="formItem">
          <span className="formItemText">Pontos em Destreza :</span>
          <input className="formItemInput" type="number" value={destreza} onChange={(e) => updateAtributo(e, destreza, setDestreza)}/>
        </div>
        
        <div className="formItem">
          <span className="formItemText">Pontos em Acerto :</span>
          <input className="formItemInput" type="number" value={acerto} onChange={(e) => updateAtributo(e, acerto, setAcerto)}/>
        </div>
        
        <div className="formItem">
          <span className="formItemText">Pontos em Reflexo :</span>
          <input className="formItemInput" type="number" value={reflexo} onChange={(e) => updateAtributo(e, reflexo, setReflexo)}/>
        </div>
        
        <div className="formItem">
          <span className="formItemText">Pontos em Constituição :</span>
          <input className="formItemInput" type="number" value={constituicao} onChange={(e) => updateAtributo(e, constituicao, setConstituicao)}/>
        </div>
      </div>
      
      <div className="attributes">
        <h3 className="titleCategory">
          Visualizar sua ficha
        </h3>
        
        <div className="attributesContent">
          <div className="attributesItem">
            <strong className="attributesItemText">
              Força:  
              <span className="attributesNormalText">{forca}</span>
              {
                forcaBonusFight ? (
                  <span className="attributesBonusEdcText">+{forcaBonusFight} [Edc]</span>
                ) : null
              }
              {
                forcaBonusBreed ? (
                  <span className="attributesBonusRacialText">+{forcaBonusBreed} [Racial]</span>
                ) : null
              }
              </strong>
            <span>
              {forcaFinal}
              <span className="attributesScale">[{forcaFinalScale}]</span>
            </span>
          </div>

          <div className="attributesItem">
            <strong className="attributesItemText">
              Destreza:  
              <span className="attributesNormalText">{destreza}</span>
              {
                destrezaBonusFight ? (
                  <span className="attributesBonusEdcText">+{destrezaBonusFight} [Edc]</span>
                ) : null
              }
              {
                destrezaBonusBreed ? (
                  <span className="attributesBonusRacialText">+{destrezaBonusBreed} [Racial]</span>
                ) : null
              }
              </strong>
            <span>
              {destrezaFinal}
              <span className="attributesScale">[{destrezaFinalScale}]</span>
            </span>
          </div>

          <div className="attributesItem">
            <strong className="attributesItemText">
                Acerto:  
                <span className="attributesNormalText">{acerto}</span>
                {
                  acertoBonusFight ? (
                    <span className="attributesBonusEdcText">+{acertoBonusFight} [Edc]</span>
                  ) : null
                }
                {
                  acertoBonusBreed ? (
                    <span className="attributesBonusRacialText">+{acertoBonusBreed} [Racial]</span>
                  ) : null
                }
              </strong>
            <span>
              {acertoFinal}
              <span className="attributesScale">[{acertoFinalScale}]</span>
            </span>
          </div>

          <div className="attributesItem">
            <strong className="attributesItemText">
              Reflexo:  
              <span className="attributesNormalText">{reflexo}</span>
              {
                reflexoBonusFight ? (
                  <span className="attributesBonusEdcText">+{reflexoBonusFight} [Edc]</span>
                ) : null
              }
              {
                reflexoBonusBreed ? (
                  <span className="attributesBonusRacialText">+{reflexoBonusBreed} [Racial]</span>
                ) : null
              }
            </strong>
            <span>
              {reflexoFinal}
              <span className="attributesScale">[{reflexoFinalScale}]</span>
            </span>
          </div>

          <div className="attributesItem">
            <strong className="attributesItemText">
              Constituição:  
              <span className="attributesNormalText">{constituicao}</span>
              {
                constituicaoBonusFight ? (
                  <span className="attributesBonusEdcText">+{constituicaoBonusFight} [Edc]</span>
                ) : null
              }
              {
                constituicaoBonusBreed ? (
                  <span className="attributesBonusRacialText">+{constituicaoBonusBreed} [Racial] </span>
                ) : null
              }
            </strong>
            <span>
              {constituicaoFinal}
              <span className="attributesScale">[{constituicaoFinalScale}]</span>
            </span>
          </div><br/>

          <div className="attributesItem">
            <strong className="attributesItemText">Agilidade:</strong>
            <span>{Math.trunc((acertoFinal + reflexoFinal) / 2)}</span>
          </div>

          <div className="attributesItem">
            <strong className="attributesItemText">Oportunidade de Ataque:</strong>
            <span>3</span>
          </div>

          <div className="attributesItem">
            <strong className="attributesItemText">Redução de Dano:</strong>
            <span>0</span>
          </div>  
        </div>
        <br/>
      </div>
    </Container>
  );
}