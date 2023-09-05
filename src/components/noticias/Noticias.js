import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import NweImg from './notici.jpg'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import SocialBar from '../socialBar/SocialBar.jsx';
//import Carousel from 'react-bootstrap/Carousel';

import data from './News.json';
import './Noticias.css'


const Noticias = () => {

  const [news, setNew] = useState(data)

  const [searchTerm, setSearchTerm] = useState('')

  const limitedNews = news.newses.slice(0, 3)

  const filteredNews = news.newses.filter(singleNews => singleNews.titulo.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <div id="news" className='news-en'>
        <h1 className='title__news'> Noticias</h1>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, backgroundColor: 'white' }}
        >
          
          <InputBase
            onChange={handleSearchChange}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar Noticias"
            value={searchTerm}
            inputProps={{ 'aria-label': 'Buscar Noticias' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          
        </Paper>
        {(filteredNews.length === 0 && searchTerm) && (
        <Typography >
          No se encontraron noticias.
        </Typography>
      )}

      </div>

      <SocialBar />
      <div className='news__head'>
        {searchTerm === '' ? (limitedNews.map((news, index) => (


            <CardActionArea className="newss" component="a" href="#" >
              <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="">
                    {news.titulo}
                  </Typography>
                  <Typography component="" variant="body1">
                    {news.descripcion}
                  </Typography>
                  <Typography variant="subtitle2" paragraph>
                    {news.date}
                  </Typography>
                  <Typography variant="body1">
                    {news.text}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 260, display: { xs: 'none', sm: 'block' } }}
                  image={NweImg}
                  alt=""
                />
              </Card>
            </CardActionArea>
        ))
        ) : (filteredNews.map((news, index) => (


          <Grid item xs={12} md={6}>
            <CardActionArea className="newss" component="a" href="#" >
              <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="">
                    {news.titulo}
                  </Typography>
                  <Typography component="" variant="body1">
                    {news.descripcion}
                  </Typography>
                  <Typography variant="subtitle2" paragraph>
                    {news.date}
                  </Typography>
                  <Typography variant="body1">
                    {news.text}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 260, display: { xs: 'none', sm: 'block' } }}
                  image={NweImg}
                  alt=""
                />
              </Card>
            </CardActionArea>
          </Grid>
        )))}
      </div>
    </>
  )
}

export default Noticias