import React from 'react'
import nanoid from 'nanoid'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Aside from '../components/Aside'
import Table from '../components/Table'
import Modals from '../components/Modal'
import '../css/Home.css'

const date = new Date()

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
      return { show: !state.show, name: '', date: '', status: 'Activo', type: 'create'}
    })
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }   
  
  onPress = () => {
    const id = nanoid(5)
    const {name, status, date, type, listMovies, id: idItem} = this.state
 
    if (type === 'create') {
      this.setState((state)=>{ 
        return {
          show:false, 
          listMovies: [...state.listMovies, ...[{id, name, date, status}]]
        }
      })
    }

    if (type === 'edit') {
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
  editItem = (item) => {
    const {name, date, status, id} = item
    this.setState((state) => { 
      return {
        show:true, 
        type: 'edit',
        name,
        status,
        date,
        id
      };
    })
  }

  render () {
    const {show, name, status, date, listMovies} = this.state
    return (
      <div>
        <Header />
        <main className='main'>
          <Aside />
          <section>
            <div className='first'>
              <h2>Peliculas</h2>
              <button onClick={this.handleShow}>Nueva Pelicula</button>

              <Modals show={show} onHide={this.handleShow} saveDate={this.onPress}>
                <div>
                  <form>
                    <label>
                    Nombre de Pelicula
                      <input type='text' name='name' value={name} onChange={this.handleChange} />
                    </label>
                    <label>
                    Fecha de publicación
                      <input type='date' name='date' value={date} onChange={this.handleChange} />
                    </label>
                    <label>
                    Estado
                      <select value={status} name='status' onChange={this.handleChange}>
                        <option value='Activo'>Activo</option>
                        <option value='Inactivo'>Inactivo</option>
                      </select>
                    </label>
                  </form>
                </div>
              </Modals>
            </div>
            <Table data={listMovies} handleEdit={(item) => this.editItem(item)} handleTrash={(item) => this.trashItem(item)} />
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Home
