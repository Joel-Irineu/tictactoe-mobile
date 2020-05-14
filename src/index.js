import React, {useState, useEffect} from 'react'
import {FlatList} from 'react-native'
import {Container, Game, Title, Option, OptionText, Footer, WinText, Winner, Button, ButtonText} from './styles'

export default function TicTacToe(){
    const emptyBoard = Array(9).fill('')
    const [board, setBoard] = useState(emptyBoard);
    const [currentPlayer, setCurrentPlayer] = useState('O')
    const [winner, setWinner] = useState(null)

    

    const handleCellClick = (index)=>{
        if(winner){
        console.log('o jogo finbalizou')
        return null
        }

        if(board[index] !== ''){
        console.log('Posição ocupada')
        return null
        }

        setBoard(board.map((item, itemindex) =>
        itemindex === index ? currentPlayer : item
        ))

        setCurrentPlayer(currentPlayer === 'X' ? 'O': 'X')
    }

    const chekWinner = ()=>{
        const possibleWaystoWin = [
        [board[0], board[1], board[2]],
        [board[3], board[4], board[5]],
        [board[6], board[7], board[8]],

        [board[0], board[3], board[6]],
        [board[1], board[4], board[7]],
        [board[2], board[5], board[8]],

        [board[0], board[4], board[8]],
        [board[6], board[4], board[2]]
        ]


        possibleWaystoWin.forEach(cells => {
        if(cells.every(cell => cell === 'O')){setWinner('O')}
        if(cells.every(cell => cell === 'X')){setWinner('X')}
        });

        checkDraw()
    }

    const checkDraw = ()=>{
        if(board.every(item => item !== '')){
        setWinner('E')
        }
    }


    useEffect(chekWinner, [board])

    const resetGame = ()=>{
        setCurrentPlayer('O')
        setBoard(emptyBoard)
        setWinner(null)
    }
    const key = [1,2,3,4,5,6,7]

    return (
        <Container>
            <Title>JOGO DA VELHA</Title>
            <Game>
                <FlatList 
                    data={board}
                    numColumns={3}
                    renderItem={({item, index})=>(
                        <Option 
                            key={index} 
                            onPress={() => handleCellClick(index)}
                            style={{backgroundColor: `${item !== '' ? item === 'O'?'#2196f3' :'#f44336' : '#fff'}`}}
                        >
                            <OptionText>{item}</OptionText>
                        </Option>
                    )}
                    
                />
            </Game>
            {winner && 
                <Footer>
                {winner === 'E' ? 
                    <WinText className='winner-message'>
                        <Winner style={{color: '#777'}}>Empatou</Winner>
                    </WinText>
                : 
                    <WinText className='winner-message'>
                        Jogador <Winner style={{color: `${winner === 'O' ? '#2196f3' : '#f44336' }`}}>{winner}</Winner> venceu
                    </WinText>
                }
                <Button onPress={resetGame}><ButtonText>Recomeçar jogo</ButtonText></Button>
                </Footer>
            }
        
        </Container>
    );
}
