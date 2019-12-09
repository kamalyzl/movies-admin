import React from 'react'
import nanoid from 'nanoid'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Aside from '../components/Aside'
import Table from '../components/Table'
import RenderModal from '../components/RenderModal'
import '../css/Home.css'

const date = new Date()
const TYPE_ACTION = Object.freeze({
  CREATE: 'create',
  UPDATE: 'update'
})

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      show: false,
      type: '',
      name: '',
      date: '',
      id: '',
      status: 'Activo',
      listMovies: [
        {
          id: nanoid(5),
          name: 'Jason Bourne',
          date: date.toISOString().slice(0,10),
          status: 'Inactivo'
        },
        {
          id: nanoid(5),
          name: 'Alicia en el pais de las maravillas',
          date: date.toISOString().slice(0,10),
          status: 'Activo'
        }
      ]
     }
  }
  handleShow = () => {
    this.setState((state, props) => {
      return { show: !state.show, name: '', date: '', status: 'Activo', type: TYPE_ACTION.CREATE}
    })
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }   
  
  onPress = () => {
    const id = nanoid(5)
    const {name, status, date, type, listMovies, id: idItem} = this.state
 
    if (type === TYPE_ACTION.CREATE) {
      this.setState((state)=>{ 
        return {
          show:false, 
          listMovies: [...state.listMovies, ...[{id, name, date, status}]]
        }
      })
    }

    if (type === TYPE_ACTION.UPDATE) {
        const indexToRemoved = listMovies.map((item) => item.id).indexOf(idItem);
        const newListMovies = this.state.listMovies.filter((_, i) => i !== indexToRemoved)
        newListMovies.splice( indexToRemoved, 0, {id: idItem, name, date, status} );
        this.setState({
          listMovies: newListMovies
        },
        () => {
          this.setState({
            show: false
          })
        }
      );
    }
  }

  trashItem = (item) => {
    const { listMovies } = this.state
    const removedListMovies = listMovies.filter(( obj ) =>  {
      return obj.id !== item.id;
  });
    this.setState((state)=>{ 
      return {
        show:false, 
        listMovies: removedListMovies
      }
    })
  }
  updateItem = (item) => {
    const {name, date, status, id} = item
    this.setState((state) => { 
      return {
        show:true, 
        type: TYPE_ACTION.UPDATE,
        name,
        status,
        date,
        id
      };
    })
  }



  render () {
    const {show, name, status, date, listMovies, type} = this.state
    return (
      <div>
        <Header />
        <main className='main'>
          <Aside />
          <section>
            <div className='first'>
              <h2>Peliculas</h2>
              <button onClick={this.handleShow}>Nueva Pelicula</button>
              {
                type === TYPE_ACTION.CREATE ? (
                  <RenderModal 
                  title='Nueva Pelicula'
                  onChange={this.handleChange}
                  onPress={this.onPress}
                  handleShow={this.handleShow}
                  show={show}
                  name={name}
                  date={date}
                  status={status}

                  />
                ): (
                  <RenderModal 
                  title='Editar Pelicula'
                  onChange={this.handleChange}
                  onPress={this.onPress}
                  handleShow={this.handleShow}
                  show={show}
                  name={name}
                  date={date}
                  status={status}
                  />
                )
              }
            </div>
            <Table data={listMovies} handleUpdate={(item) => this.updateItem(item)} handleTrash={(item) => this.trashItem(item)} />
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Home
