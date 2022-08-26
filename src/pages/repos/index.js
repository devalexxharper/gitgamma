import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styled'

export default function Repos() {
  const [repositories, setRepositories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName')
    if (repositoriesName !== null) {

      repositoriesName = JSON.parse(repositoriesName)
      setRepositories(repositoriesName)
      localStorage.clear()
    } else {
      navigate('/')
    }
  }, [])

  return (
    <S.Container>
      <S.Title>Repositories</S.Title>
      <S.List>
        {repositories.map(repository => {
          return (
            <S.ListItem>Repository: {repository} </S.ListItem>
          )
        })}
      </S.List>
      <S.LinkHome to="/">Back</S.LinkHome>
    </S.Container>
  )
}
