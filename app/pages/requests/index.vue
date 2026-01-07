<template>
  <v-container>
    <div class="d-flex align-center justify-space-between mb-4">
      <div>
        <h1 class="text-h5 font-weight-medium">Requests</h1>
        <div class="text-body-2 text-medium-emphasis">
          Create and track your expense requests
        </div>
      </div>

      <v-btn color="primary" prepend-icon="mdi-plus" to="/requests/new">
        New request
      </v-btn>
    </div>

    <v-card rounded="xl">
      <v-card-text>
        <div class="text-body-2 text-medium-emphasis">
          (Next) ใส่ตาราง list + filter ที่หน้านี้
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
