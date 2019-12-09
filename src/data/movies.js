import nanoid from 'nanoid'
const date = new Date()

export const dataListMovies = [
  {
    id: nanoid(5),
    name: 'Jason Bourne',
    date: date.toISOString().slice(0, 10),
    status: 'Inactivo'
  },
  {
    id: nanoid(5),
    name: 'Alicia en el pais de las maravillas',
    date: date.toISOString().slice(0, 10),
    status: 'Activo'
  },
  {
    id: nanoid(5),
    name: 'Nacidos Rey',
    date: '2007-08-24',
    status: 'Activo'
  },
  {
    id: nanoid(5),
    name: 'La inocencia',
    date: '2005-07-20',
    status: 'Activo'
  }
]
