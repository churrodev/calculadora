<template>
    <h3 class="text-center">Calculadora Para Elección de un Buen Producto</h3>
    <div class="container">
        <div class="row">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary">Limpiar</button>
            </div>
        </div>
        <div class="col-md-9">
            <div class="mb-3">
                <label for="NombreDelProducto" class="form-label">Nombre del Producto</label>
                <input type="text" class="form-control" id="NombreDelProducto" placeholder="añadir nombre...">
            </div>
        </div>
    </div>
    <CalculatorTable />
</template>

<script>

    import CalculatorTable from "./CalculatorTable.vue";

    export default {
        name: 'CalculatorHead',
        components: {
            CalculatorTable
        }
    }
</script>