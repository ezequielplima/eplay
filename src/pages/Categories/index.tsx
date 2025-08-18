import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star-wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportsGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Acão" background={'black'} />
        <ProductsList
          games={sportsGames}
          title="Esportes"
          background={'gray'}
        />
        <ProductsList games={fightGames} title="Luta" background={'black'} />
        <ProductsList games={rpgGames} title="RPG" background={'gray'} />
        <ProductsList
          games={simulationGames}
          title="Simulacao"
          background={'black'}
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
