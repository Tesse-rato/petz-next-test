/**
 *
 * Pontos de atencao!
 *
 * Experimente navegar pelos inputs do formulario usando a tecla TabSpace
 *
 * Experimente navegar pelas opções do Select usando a setinha do teclado
 *
 * Experimente também filtrar as opções escrevendo qualquer texto no input do select
 *
 * Para confirmar uma opcão no select basta apertar a tecla Enter do teclado
 *
 *
 * Para salvar o agendamento, como não tem uma API para chamar
 * eu resolvi fazer um estilo de roleta.
 * É gerado um número aleatório entre 0 e 10,
 * se esse número for par, será entendido como sucesso no agendamento,
 * se esse número dor impar, será entendido como erro no agendamento.
 *
 */

import Image from "next/image";
import { Buttons, Inputs } from "../components";
import { SubHeader } from "../components/Containers";
import styles from "../styles/Scheduling.module.css";

import PlusSVG from "../public/images/plus.svg";
import TrashSVG from "../public/images/trash.svg";

import SchedulingHook from "../hooks/scheduling";

export default function Scheduling() {
  const {
    name,
    setName,
    secondName,
    setSecondName,
    regions,
    cities,
    pokemons,
    regionSelected,
    setRegionSelected,
    citieSelected,
    setCitieSelected,
    pokemonsList,
    handlePokemonSelectInList,
    addPokemonToList,
    removePokemonInList,
    schedulingDate,
    schedulingTime,
    schedulingDateSelected,
    setSchedulingDateSelected,
    schedulingTimeSelected,
    setSchedulingTimeSelected,
    pokemonsAmount,
    subTotal,
    tax,
    total,
    submit,
  } = SchedulingHook();

  return (
    <>
      <SubHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Agendar Consulta", link: "/scheduling" },
        ]}
        title="Agendar Consulta"
        subTitle="Recupere seus pokémons em 5 segundos"
      />
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.inputRow}>
            <Inputs.Base
              placeholder="Digite seu nome"
              label="Nome"
              value={name}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                setName(ev.target.value)
              }
            />
            <Inputs.Base
              placeholder="Digite seu sobrenome"
              label="Sobrenome"
              value={secondName}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                setSecondName(ev.target.value)
              }
            />
          </div>
          <div className={styles.inputRow}>
            <Inputs.Select
              label="Região"
              placeholder="Selecione sua região"
              value={regionSelected}
              onChange={setRegionSelected}
              options={regions.map((v) => ({ label: v.name, value: v.name }))}
            />
            <Inputs.Select
              label="Cidade"
              placeholder="Selecione sua cidade"
              value={citieSelected}
              onChange={setCitieSelected}
              options={cities.map((v) => ({ label: v.name, value: v.name }))}
            />
          </div>
          <span style={{ marginTop: 125 }} className={styles.label}>
            Cadastre seu time
          </span>
          <span className={styles.description} style={{ marginBottom: 20 }}>
            Atendemos até 06 pokémons por vez
          </span>
          <div className={styles.list}>
            {pokemonsList.map((pokemon, i) => {
              return (
                <div className={styles.inputRow} key={i + "pl"}>
                  <span className={styles.label}>
                    Pokémon {String(i + 1).padStart(2, "0")}
                  </span>
                  <Inputs.Select
                    value={pokemon}
                    placeholder="Selecione um pokémon"
                    onChange={(v) => handlePokemonSelectInList(v, i)}
                    options={pokemons.map((v) => ({
                      label: v.name,
                      value: v.name,
                    }))}
                  />
                  <Image
                    alt="trash"
                    src={TrashSVG}
                    onClick={() => removePokemonInList(i)}
                  />
                </div>
              );
            })}
            <button className={styles.plusButton} onClick={addPokemonToList}>
              Adicionar novo pokémon ao time...
              <Image alt="plus" src={PlusSVG} />
            </button>
          </div>
          <div className={styles.inputRow}>
            <Inputs.Select
              placeholder="Selecione uma data"
              label="Data para atendimento"
              options={schedulingDate.map((v) => ({ label: v, value: v }))}
              value={schedulingDateSelected}
              onChange={setSchedulingDateSelected}
            />
            <Inputs.Select
              placeholder="Selecione um horário"
              label="Horário para atendimento"
              options={schedulingTime.map((v) => ({ label: v, value: v }))}
              value={schedulingTimeSelected}
              onChange={setSchedulingTimeSelected}
            />
          </div>
          <hr className={styles.line} />
          <div className={styles.resumeList}>
            <div className={styles.resumeRow}>
              <span className={styles.resumeText}>
                Número de pokémons a serem atendidos:
              </span>
              <span className={styles.resumeText}>
                {String(pokemonsAmount).padStart(2, "0")}
              </span>
            </div>
            <div className={styles.resumeRow}>
              <span className={styles.resumeText}>
                Atendimento unitário por pokémon:
              </span>
              <span className={styles.resumeText}>R$ 70,00</span>
            </div>
            <div className={styles.resumeRow}>
              <span className={styles.resumeText}>Subtotal:</span>
              <span className={styles.resumeText}>
                R${" "}
                {subTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className={styles.resumeRow}>
              <span className={styles.resumeText}>Taxa geracional*:</span>
              <span className={styles.resumeText}>
                R$ {tax.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className={styles.resumeRow}>
              <span className={styles.resumeText} style={{ fontSize: 8 }}>
                *adicionamos uma taxa de 3%, multiplicado pelo número da geração
                mais alta do time, com limite de até 30%
              </span>
            </div>
            <div className={styles.resumeRow} style={{ marginTop: 40 }}>
              <span className={styles.totalLabel}>
                Valor Total: R${" "}
                {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
              <Buttons.Primary onClick={submit}>
                Concluir Agendamento
              </Buttons.Primary>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
