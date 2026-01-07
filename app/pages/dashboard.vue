<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h5 font-weight-medium">Dashboard</h1>
        <div class="text-body-2 text-medium-emphasis">
          Overview of requests and approvals
        </div>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="pa-4" rounded="xl">
          <div class="text-caption text-medium-emphasis">My Requests</div>
          <div class="text-h5 font-weight-bold">12</div>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="pa-4" rounded="xl">
          <div class="text-caption text-medium-emphasis">Pending</div>
          <div class="text-h5 font-weight-bold">3</div>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="pa-4" rounded="xl">
          <div class="text-caption text-medium-emphasis">Approved</div>
          <div class="text-h5 font-weight-bold">7</div>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="pa-4" rounded="xl">
          <div class="text-caption text-medium-emphasis">Rejected</div>
          <div class="text-h5 font-weight-bold">2</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
