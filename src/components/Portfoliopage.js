import React from 'react';
import CardComponent from './CardComponent'

import ang from '../Assets/angularPortfolio.png';
import vue from '../Assets/VueVersion.png';
import reactproj from '../Assets/ReactPortfolio.png';
import calculator from '../Assets/jqueryCalculator.png';
import nyt from '../Assets/nyt.png';
import dotdata from '../Assets/DotDataProject.png';
import weatherapp from '../Assets/weatherapp.png';
import RandomPasswordGenerator from '../Assets/RandomPasswordGenerator.png';
import SortingVisualizer from '../Assets/SortingVisualizer.png';

function Portfoliopage(props) {
  var widthvar = '18rem';
  var heightvar = '130px';
  return (
    <div className="Portfoliopage">
      <CardComponent
        image={reactproj}
        width={widthvar}
        height={heightvar}
        title="Old portfolio React Project"
        text='Same Project in React'
        site='https://david-farley-portfolio.netlify.com/'
        git='https://github.com/davidfarley71/PortfolioProject2.0'
      />
      <CardComponent
        image={ang}
        width={widthvar}
        height={heightvar}
        title="Duplicate old portfolio Angular8 Project"
        text='Same Project in Angular'
        site='https://angularportfolio-99685.firebaseapp.com'
        git='https://github.com/davidfarley71/AngularPortfolio'
      />
      <CardComponent
        image={vue}
        width={widthvar}
        height={heightvar}
        title="Duplicate old portfolio Vue.JS Project"
        text='Same Project in Vue.JS'
        site='https://vueportfolio-f5902.firebaseapp.com/#/'
        git='https://github.com/davidfarley71/Vue-Portfolio'
      />

      <CardComponent
        image={calculator}
        width={widthvar}
        height={heightvar}
        title="Simple calculator app"
        site='https://davidfarley71.github.io/jQueryCalculator/'
        text='Demonstrate use of Jquery'
        git='https://github.com/davidfarley71/jQueryCalculator'
      />
      <CardComponent
        image={nyt}
        width={widthvar}
        height={heightvar}
        title="New York Times article Search"
        site='https://davidfarley71.github.io/NewYorkTimesSearch/index.html'
        text='Bootstrap and public API'
        git='https://github.com/davidfarley71/NewYorkTimesSearch'
      />
      <CardComponent
        image={dotdata}
        width={widthvar}
        height={heightvar}
        title="Simple Angular8 with filter and sort"
        site='https://bookshelf-7f195.firebaseapp.com/'
        text='Responsive design with modal slideshow, Jasmine and karma tests'
        git='https://github.com/davidfarley71/Bookshelf'
      />
      <CardComponent
        image={weatherapp}
        width={widthvar}
        height={heightvar}
        title="Simple weather API"
        site='https://davidfarley71.github.io/WeatherApi/index.html'
        text='Responsive Bootstrap live API with browser storage'
        git='https://github.com/davidfarley71/WeatherApi'
      />
      <CardComponent
        image={RandomPasswordGenerator}
        width={widthvar}
        height={heightvar}
        title="Simple Password Generator"
        site='https://davidfarley71.github.io/RandomPasswordGenerator/index.html'
        text='Javascript HTML and CSS'
        git='https://github.com/davidfarley71/RandomPasswordGenerator'
      />
      <CardComponent
        image={SortingVisualizer}
        width={widthvar}
        height={heightvar}
        title="Sorting Visualizer with React!"
        site='https://demosortingvisualizer.netlify.app/'
        text='Algorithms with React'
        git='https://github.com/davidfarley71/Sorting-Visualizer'
      />
    </div>
  );
}

export default Portfoliopage;
