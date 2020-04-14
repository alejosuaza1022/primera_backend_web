<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href=".">Gestión de parqueadero</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown text="Navegación" right>
              <b-dropdown-item class = "a" href="bookmark">bookmarks</b-dropdown-item>
         

            </b-nav-item-dropdown>


          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <nuxt />
    <div class="d-flex flex-column">
  <footer class="footer">
    <div>
      <a href="">CoreUI</a>
      <span>&copy; 2020 creativeLabs.</span>
    </div>
    <div class="ml-auto">
      <span>Powered by</span>
      <a href="">asb1022</a>
    </div>
  </footer>
</div>
  </div>
    
</template>

Purple Panel Footer 

<style>
    
    .dropdown-item:active{
        background: #0C6EB8;    
    }

    
    html {
      font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 16px;
      word-spacing: 1px;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
      box-sizing: border-box;
      margin: 0;
    }
    .b-navbar{

      background: #0C6EB8;
    }
    .button--green {
      display: inline-block;
      border-radius: 4px;
      border: 1px solid #3b8070;
      color: #3b8070;
      text-decoration: none;
      padding: 10px 30px;
    }
    .button--green:hover {
      color: #fff;
      background-color: #3b8070;
    }
    .button--grey {
      display: inline-block;
      border-radius: 4px;
      border: 1px solid #35495e;
      color: #35495e;
      text-decoration: none;
      padding: 10px 30px;
      margin-left: 15px;
    }
    .button--grey:hover {
      color: #fff;
      background-color: #35495e;
    }
    .a :hover{
      
      background: #0C6EB8;
    }
</style>
