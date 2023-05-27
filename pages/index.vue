<template>
  <div>
    <v-dashboard-breadcrumbs
        title="Dasboard"
        :items="breadcrumbs"
    />
    <v-row>
      <v-col cols="12">
        <v-dashboard-card title="Usuarios" subtitle="Directorio Activo">
          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">
                    Nombre
                  </th>
                  <th class="text-left">
                    Extensión
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                    v-for="item in desserts"
                    :key="item.name"
                >
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn :to="{name: 'auth-login'}" color="primary">Enviar</v-btn>
          </v-card-actions>
        </v-dashboard-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import {BreadcrumbItem} from "~/types/dashboard";
definePageMeta({
  layout: "default",
  middleware: ["auth"]
});
const title = ref("Inicio");
const breadcrumbs = ref<BreadcrumbItem[]>([
  {
    title: "Dashboard",
    disabled: false,
    to: { name: "index" }
  },
  {
    title: "Usuarios",
    disabled: true,
    to: { name: "auth-login" }
  }
]);
useHead({
  meta: [{ content: title }],
  title,
});

const desserts = [
  {
    name: 'Daniel Forero',
    calories: 159,
  },
  {
    name: 'Sebastián Aldana',
    calories: 237,
  },
  {
    name: 'Mauricio Medina',
    calories: 262,
  },
  {
    name: 'Jhon Zabala',
    calories: 305,
  },
  {
    name: 'Yisel Carabali',
    calories: 356,
  },
  {
    name: 'José Cruz',
    calories: 375,
  },
  {
    name: 'Daniel Prado',
    calories: 392,
  },
  {
    name: 'Javier Ríos',
    calories: 408,
  },
  {
    name: 'Laura Sanchez',
    calories: 452,
  },
  {
    name: 'Miaria E Ruiz',
    calories: 518,
  },
];
</script>