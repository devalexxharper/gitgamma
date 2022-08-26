import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as S from './styled'

export default function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [error, setError] = useState(false)

  function handleFind() {
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        const repositories = response.data
        const repositoriesName = []
        // eslint-disable-next-line array-callback-return
        repositories.map((repository) => {
          repositoriesName.push(repository.name)
        })
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
        navigate('/repositories')
      })
      .catch(err => {
        setError(true)
      })
  }


  return (
    <S.HomeContainer>
      <S.Content >
        <S.Input className='userInput' placeholder='Type a username' value={user}
          onChange={e => setUser(e.target.value)} />
        <S.Button type='button' onClick={handleFind}>Search</S.Button>
      </S.Content>
      {error ? <S.Error >User does not exist, try again!</S.Error> : ''}
    </S.HomeContainer >
  )
}