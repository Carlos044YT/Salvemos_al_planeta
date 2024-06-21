document.getElementById('waterFootprintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const region = document.getElementById('region').value;
    const showers = parseInt(document.getElementById('showers').value);
    const laundry = parseInt(document.getElementById('laundry').value);
    const meat = parseInt(document.getElementById('meat').value);
    const vegetables = parseInt(document.getElementById('vegetables').value);

    // Valores promedio de consumo de agua (en litros)
    const showerWaterUse = 50; // Litros por ducha
    const laundryWaterUse = 150; // Litros por carga de ropa
    const meatWaterUse = 15400; // Litros por kg de carne
    const vegetablesWaterUse = 322; // Litros por kg de vegetales

    // Calcular el consumo de agua directo e indirecto por semana
    const directWaterFootprint = (showers * showerWaterUse) + (laundry * laundryWaterUse);
    const indirectWaterFootprint = (meat * meatWaterUse) + (vegetables * vegetablesWaterUse);

    // Calcular la huella hidráulica total
    const totalWaterFootprint = directWaterFootprint + indirectWaterFootprint;

    // Mostrar los resultados
    document.getElementById('totalWaterFootprint').innerText = `Huella Hidráulica Total: ${totalWaterFootprint} litros por semana`;
    document.getElementById('directWaterFootprint').innerText = `Consumo de Agua Directo: ${directWaterFootprint} litros por semana`;
    document.getElementById('indirectWaterFootprint').innerText = `Consumo de Agua Indirecto: ${indirectWaterFootprint} litros por semana`;

    // Mostrar la sección de resultados
    document.getElementById('results').style.display = 'block';
});
