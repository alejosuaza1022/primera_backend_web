<template>
  <div class="content">
    <b-container>
      <!-- Content here -->

      <h1>Formulario de vehiculos {{ message }}</h1>

      <b-form action="javascript:void(0)" @submit="validar()">
        <b-form-group label="url" label-for="url">
          <b-form-input
            class="form-control"
            v-bind:required="true"
            v-model="bookmark.url"
            type="text"
            placeholder="ingrese la url "
            id="url"
          />
        </b-form-group>

        <b-form-group label="nombre" label-for="nombre">
          <b-form-input
            class="form-control"
            v-model="bookmark.nombre"
            type="text"
            v-bind:required="true"
            placeholder="Ingrese el nombre de la pagina"
            id="nombre"
          />
        </b-form-group>

        <b-form-group label="descripcion" label-for="descripcion">
          <b-form-input
            class="form-control"
            v-model="bookmark.descripcion"
            placeholder="ingrese la descripción"
            id="descripcion"
          />
        </b-form-group>
        <b-button
          @click="crear_bookmark()"
          variant="primary"
          v-if="!enEdicion"
          class="submit-button"
          >Crear bookmark</b-button
        >
        <b-button
          @click="actualizar_vehiculo()"
          variant="primary"
          v-else
          class="submit-button"
          >Actualizar bookmark</b-button
        >
      </b-form>

      <b-table striped hover :items="lista_bookmark">
        <template class="table" v-slot:cell(acciones)="row">
          <b-button
            size="sm"
            @click="cargar_vehiculo(row)"
            class="ml-2 acciones"
            >Modificar</b-button
          >
          <b-button
            size="sm"
            @click="eliminar_vehiculo(row)"
            class="ml-2 acciones"
            >Eliminar</b-button
          >
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<style>
.table {
  margin-top: 50px;
  padding-block-end: 50px;
  padding-block: 50px;
  background: rgb(189, 207, 245);
}
</style>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      enEdicion: false,
      bool: false,
      message: "",
      lista_bookmark: [],
      bookmark: {
        id: null,
        url: null,
        name: null,
        descripcion: null,
        acciones: null
      }
    };
  },
  mounted() {
    this.created();
  },
  methods: {
    validar() {
      this.bool = true;
    },
    crear_bookmark() {
      this.validar()
      if (this.bool) {
      
        axios
          .post("http://localhost:4000/api/bookmark", {
            url: this.bookmark.url,
            nombre: this.bookmark.nombre,
            descripcion: this.bookmark.descripcion
          })
          .then(res => {
            let aux = Object.assign({},this.bookmark)
            this.message = res.data["message"];
            aux.id = res.data["data"]["id"] 
            this.lista_bookmark.push(aux);
          })
        
          .catch(err => (this.message = "ha ocurrido el error :" + err.data));
      }
    },
    limpiar() {
      
      this.bool = false
      this.bookmark = {
        url: null,
        nombre: null,
        descripcion: true
      };
    },
    created() {
      axios
        .get("http://localhost:4000/api/bookmark")
        .then(res => {
          let aux = res.data["data"];
          this.lista_bookmark = aux.map(el => {    
            var o = Object.assign({}, el);     // asignar el campo acciones a todos los valores de la BD
            o.acciones = null;
            return o;
          });
        })
        .catch(error => {
          this.message = error;
        });
    },
    cargar_vehiculo({ item }) {
      let aux_bookmark = this.lista_bookmark.find(
        bookmark => bookmark.id == item.id
      );
      this.enEdicion = true;
      this.bookmark = Object.assign({}, aux_bookmark);
    },
    actualizar_vehiculo() {
      this.enEdicion = false;
      let posicion = this.lista_bookmark.findIndex(
        bookmark => bookmark.id == this.bookmark.id
      );
      axios
        .put(`http://localhost:4000/api/bookmark/${this.bookmark.id}`, {
          url: this.bookmark.url,
          nombre: this.bookmark.nombre,
          descripcion: this.bookmark.descripcion
        })
        .then(resp => {
          this.lista_bookmark.splice(posicion, 1, this.bookmark);
          this.message = "actualizado ";

        })
        .catch(err => {
          this.message = err;
        });
    },

    eliminar_vehiculo({ item }) {
      let posicion = this.lista_bookmark.findIndex(
        bookmark => bookmark.id == item.id
      );
      axios
        .delete(`http://localhost:4000/api/bookmark/${item.id}`)
        .then(resp => {
          this.lista_bookmark.splice(posicion, 1);
          if (this.lista_vehiculos.length == 0) this.enEdicion = false;
        })
        .catch(error => (thus.message = error));
    }
  }
};
</script>
