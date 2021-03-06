# Getting Started with Create React App and Flask with Simple Custom Movie API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Flask is Running in Localhost:5000 and Following are the End-Points of Flask API

<!-- Custom JavaScript files set in YAML front matter -->
{% for js in page.customjs %}
<script async type="text/javascript" src="{{ js }}"></script>
{% endfor %}


1. /add_movie {Method => POST}
  1. Add a new movie 
   ```javascript{titile:'movie_name',rating:NUMBER}```
2. /movies  {Method =>GET}
  1. Get all the movies

In the project directory, you can run:


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
