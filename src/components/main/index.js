import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Testimonials from  './Testimonials';
import ContactUs from './ContactUs';
import Footer from './Footer';
import {ToastsContainer, ToastsStore} from 'react-toasts';
import axios from 'axios';
import {BASE_URL, TRACK_IP, GET_RESUME} from '../../apis';
import NotFound from '../NotFound';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: this.props.name,
            myResume: undefined,
            dataLoaded: false,
        };
    }

    componentDidMount() {
        const { name } = this.state;
        axios.get(`${BASE_URL}${GET_RESUME}${name}`)
          .then( response => {
            if (response.status == 200) {
                const myResume = response.data;
                
                this.setState({dataLoaded: true, myResume});
                document.title = myResume.name;

                const body = { name: myResume.name };
                axios.post(`${BASE_URL}${TRACK_IP}`, body);
            } else {
                this.setState({dataLoaded: true, myResume:undefined})
            }
          } )
          .catch( response => {
            ToastsStore.error('Contacting was failed, please try again later!');
          } );
    }
    
    render() {
        const { myResume, dataLoaded } = this.state;
        return (
            <>
            { dataLoaded && myResume !== undefined ? 
                <>
                    <Header resumeData={myResume}/>
                    <About resumeData={myResume}/>
                    <Resume resumeData={myResume}/>
                    <Portfolio resumeData={myResume}/>
                    <Testimonials resumeData={myResume}/>
                    <ContactUs resumeData={myResume}/>
                    <Footer resumeData={myResume}/>
                    <ToastsContainer store={ToastsStore}/>
                </>
            :   <NotFound />
            }
            </>
        );
    }
}

export default Main;