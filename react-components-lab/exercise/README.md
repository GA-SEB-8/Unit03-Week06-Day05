<h1>
  <span class="headline">React Components Lab</span>
  <span class="subhead">Exercise</span>
</h1>

## Overview

In this lab, you'll build a weather forecast page that **re-uses a single component** to display multiple days' worth of weather forecasts.

To complete this exercise, you only need to work with two components: `src/App.jsx` and `src/components/WeatherForecast/WeatherForecast.jsx`. The `App` component will act as our root, while the `WeatherForecast` component will be used within `src/App.jsx` to dynamically generate a list of forecasts.

Your app should adhere to the following component hierarchy diagram:

![Component hierarchy diagram](./assets/chd-core.png)

> 💡 When content is dynamically generated, we only include the re-used component **once** in a component hierarchy diagram.

## Starter code

First, we'll need some weather data. Copy the following `weatherForecasts` array into your `src/App.jsx` file:

```jsx
const weatherForecasts = [
  {
    day: 'Mon',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];
```

## `App.jsx` starter code

At the `App.jsx` level, add a `<section>` tag that will surround all of the `WeatherForecast` elements. We'll need it for the CSS.

```jsx
  <>
    <h1>Local Weather</h1>
    <section>
      // Weather data here
    </section>
  </>
```

## WeatherForecast starter CSS

Create a `WeatherForecast.css` file in the same directory as the `WeatherForecast.jsx` file. Add the following style rules to it:

```css
section {
  display: flex;
}

section .weather {
  border: 1px solid #ccc;
  flex: 1;
  padding: 10px;
  text-align: center;
}

.weather span {
  font-weight: bold;
}
```

> ⚠️ Be sure to import this stylesheet at the top of your `WeatherForecast.jsx` component file!

## WeatherForecast HTML

Each instance of the `WeatherForecast` component should have the JSX equivalent of the following HTML structure:

```html
<div className="weather">
  <h2>Day of the Week</h2>
  <img src="" alt="" />
  <p><span>conditions: </span>current weather conditions</p>
  <p><span>time: </span>time of day</p>
</div>
```
