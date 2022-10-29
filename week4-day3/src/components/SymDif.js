import "../App.css"
import React, { useState } from "react"
import _ from "lodash"

const SymDif = () => {
  // <---------------------------------Qn2a - Symmetric Difference ------------------------------------------>

  const arrOne = [
    {
      id: 20,
      name: "alex"
    },
    {
      id: 30,
      name: "alina"
    }
  ]

  const arrTwo = [
    {
      id: 40,
      name: "hello"
    },
    {
      id: 30,
      name: "world"
    }
  ]

  let symDif1 = _.xorBy(arrOne, arrTwo, 'id') //take out difference based on ID
  let symDif2 = _.xorBy(arrOne, arrTwo, symDif1) //returns the unfiltered object that is duplicated

  console.log(symDif1)
  console.log(symDif2)

  // <---------------------------------Qn2b - Find specific value of a key------------------------------------------>

  const str = ['u', 'ec']

  const arr = [
    {
    storageVal: 'u',
    table: ['E', 'F']
    },
    {
    storageVal: 'data',
    id: 3
    },
    {
    storageVal: 'ec',
    table: ['E']
    }
  ]

  const findTable = []
  str.forEach(e => {
    findTable.push(_.find(arr, {storageVal: e}).table)
  })

  console.log(findTable)

  // <---------------------------------Qn2c - Flattening array (deep way) ------------------------------------------>

  const a = [['E'], ['F']]

  console.log(_.flattenDeep(a))

  // <---------------------------------Qn2d - Flattening and making unique by chaining  ------------------------------------------>

  const t = [['E', 'F'], [['F'], ['G']]]

  let returnValue = _.chain(t)
    .flattenDeep()
    .uniq()
    .value()

  console.log(returnValue)

  return <></>
}

export default SymDif
