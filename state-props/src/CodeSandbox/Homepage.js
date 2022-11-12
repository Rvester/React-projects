import Header from './Header'
import Employeelist from './Employeelist'
import Searchbar from './Searchbar'

function Homepage (){

    return(
        <div className = 'home'>
           
            <Header />
            <Searchbar />
            <Employeelist/>
        </div>
    )
}

export default Homepage