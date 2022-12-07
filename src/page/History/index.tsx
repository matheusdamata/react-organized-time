import { useContext, useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'
import { CyclesContext } from '../../contexts/CyclesContext'
import {
  HistoryContainer,
  HistoryEmpty,
  HistoryHeader,
  HistoryList,
  Status,
} from './styles'
import { Cycle } from '../../reducers/cycles/reducer'

export function History() {
  const { cycles, removeAllCycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <HistoryHeader>
        <h1>Meu histórico</h1>

        {cycles.length > 0 ? (
          <button onClick={removeAllCycles} disabled={!cycles}>
            Apagar Histórico
          </button>
        ) : null}
      </HistoryHeader>

      {cycles.length > 0 ? (
        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cycles.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.minutesAmount} minutos</td>
                    <td>
                      {formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    <td>
                      {cycle.finishedDate && (
                        <Status statusColor="green">Concluído</Status>
                      )}

                      {cycle.interruptedDate && (
                        <Status statusColor="red">Interrompido</Status>
                      )}

                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status statusColor="yellow">Em andamento</Status>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </HistoryList>
      ) : (
        <HistoryEmpty>
          <strong>Você não tem histórico para mostrar</strong>
        </HistoryEmpty>
      )}
    </HistoryContainer>
  )
}
