import { useState, useEffect } from 'react'
import { Container } from './styles'

export function App() {
  const [xpTotal, setXpTotal] = useState(0)
  const [level, setLevel] = useState(0)
  const [breedSelected, setBreedSelected] = useState("")
  const [optionsBonus, setOptionsBonus]:any = useState([])
  const [breedBonusSelected, setBreedBonusSelected] = useState("")
  const [styleFigthSelected, setStyleFigthSelected] = useState("")
  
  const [forca, setForca] = useState("")
  const [destreza, setDestreza] = useState("")
  const [acerto, setAcerto] = useState("")
  const [reflexo, setReflexo] = useState("")
  const [constituicao, setConstituicao] = useState("")

  const [forcaBonusBreedHuman, setForcaBonusBreedHuman] = useState(0)
  const [destrezaBonusBreedHuman, setDestrezaBonusBreedHuman] = useState(0)
  const [acertoBonusBreedHuman, setAcertoBonusBreedHuman] = useState(0)
  const [reflexoBonusBreedHuman, setReflexoBonusBreedHuman] = useState(0)
  const [constituicaoBonusBreedHuman, setConstituicaoBonusBreedHuman] = useState(0)

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

  // const [counterXpHumanoCounter, setCounterXpHumanoCounter] = useState(0)
  const [counterXpHumanoActive, setCounterXpHumanoActive] = useState(false)

  function calculateAtributte(){
    const total = Number(forca) + Number(destreza) + Number(acerto) + Number(reflexo) + Number(constituicao)

    const newCounterXp = xpTotal - total;
    setCounterXp(newCounterXp)
  }

  function calculateCounterBonusHuman(){
    // const total = forcaBonusBreedHuman + destrezaBonusBreedHuman + acertoBonusBreedHuman + reflexoBonusBreedHuman + constituicaoBonusBreedHuman;

    // const newCounterXpHuman = 8 - total;
    // setCounterXpHumanoCounter(newCounterXpHuman)
  }

  function updateAtributo(e:any, valuePast: string, setFunction: any){
    let value = Number(e.target.value);

    if(value < 0){
      return
    }

    // console.log(counterXpHumanoActive)
    // console.log(counterXp)

    if(counterXpHumanoActive){
      
      if(Number(valuePast) > 0){
        const valueEddited = value - Number(valuePast);
  
        if(valueEddited > counterXp + 8){
          return
        }
  
        setFunction(value)
        return 
      }
  
      if(value > counterXp + 8){
        return
      }
      
      setFunction(value)
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
    
    setFunction(value)
  }

  
  function updateOptionsBonusBreed(){
    switch (breedSelected) {
      case "8P":
        setCounterXpHumanoActive(true)
        break;

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
      setForcaBonusFight(3 * level)
    }

    if(bonus3D){
      setDestrezaBonusFight(3 * level)
    }

    if(bonus3A){
      setAcertoBonusFight(3 * level)
    }

    if(bonus3R){
      setReflexoBonusFight(3 * level)
    }

    if(bonus3C){
      setConstituicaoBonusFight(3 * level)
    }

    //Bonus 2
    if(bonus2F){
      setForcaBonusFight(2 * level)
    }

    if(bonus2D){
      setDestrezaBonusFight(2 * level)
    }

    if(bonus2A){
      setAcertoBonusFight(2 * level)
    }

    if(bonus2R){
      setReflexoBonusFight(2 * level)
    }

    if(bonus2C){
      setConstituicaoBonusFight(2 * level)
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
      setValue("H??bil")
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
      setValue("Magn??fico")
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

  function handleLevel(value : number){
    const lvl1 = value < 40;
    const lvl2 = value >= 40 && value < 60;
    const lvl3 = value >= 60 && value < 80;
    const lvl4 = value >= 80 && value < 100;
    const lvl5 = value >= 100 && value < 130;
    const lvl6 = value >= 130 && value < 160;
    const lvl7 = value >= 160 && value < 190;
    const lvl8 = value >= 190 && value < 220;
    const lvl9 = value >= 220 && value < 250;
    const lvl10 = value >= 250 && value < 300;
    const lvl11 = value >= 300 && value < 350;
    const lvl12 = value >= 350 && value < 400;
    const lvl13 = value >= 400 && value < 450;
    const lvl14 = value >= 450 && value < 500;
    const lvl15 = value >= 500 && value < 580;
    const lvl16 = value >= 580 && value < 660;
    const lvl17 = value >= 660 && value < 740;
    const lvl18 = value >= 740 && value < 820;
    const lvl19 = value >= 820 && value < 900;
    const lvl20 = value >= 900;

    if(lvl1){
      setLevel(1)
    }

    if(lvl2){
      setLevel(2)
    }

    if(lvl3){
      setLevel(3)
    }

    if(lvl4){
      setLevel(4)
    }

    if(lvl5){
      setLevel(5)
    }

    if(lvl6){
      setLevel(6)
    }

    if(lvl7){
      setLevel(7)
    }

    if(lvl8){
      setLevel(8)
    }

    if(lvl9){
      setLevel(9)
    }

    if(lvl10){
      setLevel(10)
    }

    if(lvl11){
      setLevel(11)
    }

    if(lvl12){
      setLevel(12)
    }

    if(lvl13){
      setLevel(13)
    }

    if(lvl14){
      setLevel(14)
    }

    if(lvl15){
      setLevel(15)
    }

    if(lvl16){
      setLevel(16)
    }

    if(lvl17){
      setLevel(17)
    }

    if(lvl18){
      setLevel(18)
    }

    if(lvl19){
      setLevel(19)
    }

    if(lvl20){
      setLevel(20)
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
    handleLevel(xpTotal)
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
    setCounterXpHumanoActive(false)
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

  useEffect(() => {
    setForca("")
    setDestreza("")
    setAcerto("")
    setReflexo("")
    setConstituicao("")

    calculateAtributte()
  }, [counterXpHumanoActive])

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

    handleScaleAttributes(forcaFinal, setForcaFinalScale);
    handleScaleAttributes(destrezaFinal, setDestrezaFinalScale);
    handleScaleAttributes(acertoFinal, setAcertoFinalScale);
    handleScaleAttributes(reflexoFinal, setReflexoFinalScale);
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
        Essa ferramenta foi feita por Arthur com objetivo de facilitar a cria????o das fichas.
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
          <span className="formItemText">Selecione sua ra??a :</span>
          <select className="formItemSelect" name="select" onChange={e => setBreedSelected(e.target.value)}>
            <option value="CodeIndefinido"></option>
            <option value="8P">Humano</option>
            <option value="Code2FD2A4R">Celestial</option>
            <option value="Code4FD2A2C">Bra??os longos</option>
            <option value="Code4FD2A2C">Pernas longas</option>
            <option value="Code4FD4A">Pesco??o de cobra</option>
            <option value="Code6F6A6C">Meio gigante</option>
            <option value="Code2FD4A2R">Tr??s olhos</option>
            <option value="Code4FD4A4R">Mink Roedor</option>
            <option value="Code2FD4A6R">Mink Felino</option>
            <option value="Code3FD3R6C">Mink Bovino</option>
            <option value="Code4FD4R4C">Mink Suino</option>
            <option value="Code4FD4A4R">Mink Simio</option>
            <option value="Code4FD6A2R">Mink Canino</option>
            <option value="Code6FD6C">Mink urs??deo</option>
            <option value="Code4FD4A4C">Mink equ??deo</option>
            <option value="Code4FD4A4R">Mink caprino</option>
            <option value="Code4FD4A4R">Mink marsupiai</option>
            <option value="Code4FD2A6C">Mink fol??voro</option>
            <option value="Code2FD2A4R">An??es</option>
            <option value="Code4FD4R4C">Homem tubar??o serra</option>
            <option value="Code4FD4A4R">Homem peixe kisu</option>
            <option value="Code4FD4A4R">Homem polvo</option>
            <option value="Code4FD4A4C">Homem arraia</option>
            <option value="Code4FD4A4C">Homem carpa</option>
            <option value="Code4FD4R4C">Homem salm??o</option>
            <option value="Code4FD4A4R">Homem enguia pelicano</option>
            <option value="Code4FD4A4C">Homem peixe dourado</option>
            <option value="Code4FD4R4C">Homem aruan??</option>
            <option value="Code4FD4A4R">Homem peixe espada</option>
            <option value="Code4R8C">Homem peixe boi</option>
            <option value="Code6FD6C">Homem tubar??o baleia</option>
            <option value="Code4FD4A4R">Homem congro bicudo</option>
            <option value="Code4FD4A4C">Homem tubar??o branco</option>
            <option value="Code4FD4A4R">Homem tubar??o martelo</option>
            <option value="Code4FD4A4C">Homem tubar??o tapete</option>
            <option value="Code4FD4A4R">Homem tubar??o charuto</option>
            <option value="Code4A4R4C">Homem lula</option>
            <option value="Code6FD6C">Homem peixe baiacu tigre</option>
            <option value="Code4FD4A4R">Sereia</option>
            <option value="Code4FD4A4R">Trit??o</option>
            <option value="Code4FD2A2R">Hibrido</option>
          </select>
        </div>
        <div className="formItem">
          <span className="formItemText">Bonifica????o da ra??a :</span>
          {
            counterXpHumanoActive ? (
              <input className="formItemInput" type="text" value="Voc?? recebeu 8 pontos adicionais" readOnly/>
            ) : (
              <select className="formItemSelect" name="select" onChange={e => setBreedBonusSelected(e.target.value)}>
              {
                optionsBonus.map((option : any) =>{
                  return <option key={option.code} value={option.code}>{option.message}</option>
                })
              }
            </select>
            )
          }
        </div>
        
        <div className="formItem">
          <span className="formItemText">Bonifica????o do estilo de combate :</span>
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
          <span className="formItemText">Pontos em For??a :</span>
          <input className="formItemInput" type="number" value={
            Number(forca) 
            // + forcaBonusBreedHuman
          } onChange={(e) => updateAtributo(e, forca, setForca)}/>
        </div>
        
        <div className="formItem">
          <span className="formItemText">Pontos em Destreza :</span>
          <input className="formItemInput" type="number" value={
            Number(destreza) 
            // + destrezaBonusBreedHuman
          } onChange={(e) => updateAtributo(e, destreza, setDestreza)}/>
        </div>
        
        <div className="formItem">
          <span className="formItemText">Pontos em Acerto :</span>
          <input className="formItemInput" type="number" value={Number(acerto) 
            // + acertoBonusBreedHuman
          } onChange={(e) => updateAtributo(e, acerto, setAcerto)}/>
        </div>
        
        <div className="formItem">
          <span className="formItemText">Pontos em Reflexo :</span>
          <input className="formItemInput" type="number" value={Number(reflexo) 
            // + reflexoBonusBreedHuman
          } onChange={(e) => updateAtributo(e, reflexo, setReflexo)}/>
        </div>
        
        <div className="formItem">
          <span className="formItemText">Pontos em Constitui????o :</span>
          <input className="formItemInput" type="number" value={Number(constituicao) 
            // + constituicaoBonusBreedHuman
          } onChange={(e) => updateAtributo(e, constituicao, setConstituicao)}/>
        </div>
      </div>
      
      <div className="attributes">
        <h3 className="titleCategory">
          Visualizar sua ficha
        </h3>

        <div className="attributesItem">
          <strong className="attributesItemText">Seu N??vel:</strong>
          <span>{level}</span>
        </div>

        <div className="attributesItem">
          <strong className="attributesItemText">Pontos de Vida:</strong>
          <span>{(xpTotal * 6) + (constituicaoFinal * 20)}</span>
        </div>

        <div className="attributesItem">
          <strong className="attributesItemText">Stamina:</strong>
          <span>{level * 100}</span>
        </div><br/>  
        
        
        <div className="attributesContent">
          <div className="attributesItem">
            <strong className="attributesItemText">
              For??a:  
              <span className="attributesNormalText">{forca}</span>
              {
                forcaBonusFight ? (
                  <span className="attributesBonusEdcText">[+{forcaBonusFight} Edc]</span>
                ) : null
              }
              {
                forcaBonusBreed ? (
                  <span className="attributesBonusRacialText">[+{forcaBonusBreed} Racial]</span>
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
                  <span className="attributesBonusEdcText">[+{destrezaBonusFight} Edc]</span>
                ) : null
              }
              {
                destrezaBonusBreed ? (
                  <span className="attributesBonusRacialText">[+{destrezaBonusBreed} Racial]</span>
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
                    <span className="attributesBonusEdcText">[+{acertoBonusFight} Edc]</span>
                  ) : null
                }
                {
                  acertoBonusBreed ? (
                    <span className="attributesBonusRacialText">[+{acertoBonusBreed} Racial]</span>
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
                  <span className="attributesBonusEdcText">[+{reflexoBonusFight} Edc]</span>
                ) : null
              }
              {
                reflexoBonusBreed ? (
                  <span className="attributesBonusRacialText">[+{reflexoBonusBreed} Racial]</span>
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
              Constitui????o:  
              <span className="attributesNormalText">{constituicao}</span>
              {
                constituicaoBonusFight ? (
                  <span className="attributesBonusEdcText">[+{constituicaoBonusFight} Edc]</span>
                ) : null
              }
              {
                constituicaoBonusBreed ? (
                  <span className="attributesBonusRacialText">[+{constituicaoBonusBreed} Racial] </span>
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
            <strong className="attributesItemText">Redu????o de Dano:</strong>
            <span>0</span>
          </div>  
        </div>
        
        <br/>
      </div>
    </Container>
  );
}