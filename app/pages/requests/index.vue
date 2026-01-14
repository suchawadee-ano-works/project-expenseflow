<template>
  <div class="page-container">
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
    <div class="d-flex align-center justify-space-between mb-4">
      <v-col cols="5">
        <v-text-field
          label="Label"
          hide-details="auto"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="5">
        <v-select
          label="Status"
          hide-details="auto"
          variant="outlined"
          :items="statusOptions"
        ></v-select>
      </v-col>
      <v-col cols="2" class="d-flex align-center">
        <v-btn color="primary">Search</v-btn>
      </v-col>
    </div>
    <template>
      <v-table class="styletable">
        <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Amount</th>
            <th class="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in requestsList" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-pagination :length="4"></v-pagination>
    </template>
  </div>
</template>

<script setup>
const statusOptions = ['DRAFT', 'SUBMITTED', 'APPROVED', 'REJECTED'];
const requestsList = [
  { id: 1, title: 'Request 1', amount: 100, status: 'DRAFT' },
  { id: 2, title: 'Request 2', amount: 200, status: 'SUBMITTED' },
  { id: 3, title: 'Request 3', amount: 160, status: 'DRAFT' },
  { id: 4, title: 'Request 4', amount: 170, status: 'SUBMITTED' },
  { id: 5, title: 'Request 5', amount: 350, status: 'APPROVED' },
  { id: 6, title: 'Request 6', amount: 250, status: 'DRAFT' },
  { id: 7, title: 'Request 7', amount: 310, status: 'REJECTED' },
  { id: 8, title: 'Request 8', amount: 190, status: 'REJECTED' },
];
</script>
<style scoped></style>
