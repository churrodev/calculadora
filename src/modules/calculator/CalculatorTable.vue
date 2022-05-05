<template>
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <table class="table table-bordered">
                    <thead>
                        <tr class="text-center">
                            <th>Parámetros</th>
                            <th>Seleccione un valor</th>
                            <th>Puntaje</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Evaluaciones</td>
                            <td>
                                <select name="" class="form-select" id="">
                                    <option value=""></option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Temperatura</td>
                            <td>
                                <select name="" class="form-select" id="">
                                    <option value=""></option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Blueprint</td>
                            <td>
                                <select name="" class="form-select" id="">
                                    <option value=""></option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Página de Ventas</td>
                            <td>
                                <select name="" class="form-select" id="">
                                    <option value=""></option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Retargeting</td>
                            <td>
                                <select name="" class="form-select" id="">
                                    <option value=""></option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Comunidad (Soporte para afiliados)</td>
                            <td>
                                <select name="" class="form-select" id="">
                                    <option value=""></option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Material Publicitario (Afiliados)</td>
                            <td>
                                <select name="" class="form-select" id="">
                                    <option value=""></option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Comisión</td>
                            <td>
                                <select name="" class="form-select" id="">
                                    <option value=""></option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Promesa</td>
                            <td>
                                <select name="" class="form-select" id="">
                                    <option value=""></option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-3">
                <TestModule />   
            </div>
        </div>
    </div>
</template>

<script>

    import TestModule from "./TestModule.vue";

    export default {
        name: 'CalculatorHead',
        data() {
            return{
                list: [
                    {
                        label: "Parámetros, Temperatura, Blueprint",
                    }
                ]
            }
        },
        components: {
            TestModule
        }
    }
</script>