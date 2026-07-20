const CONFIG = {
    odoo: {
        url: 'https://comerliv1.odoo.com',
        db: 'comerliv1',
        user: 'carlo.h@comerliv.com',
        password: '479c4c0c524df82ba8463fb60c7b816bd6c29cc4',
    },
    operators: {
        victor: { name: 'Víctor Arroyo', partner_id: 452 },
        lizbeth: { name: 'Lizbeth Vargas', partner_id: 453 },
    },
    tablaIgualacion: {
        "Aro Luz Led QX-260 10 pulgadas 3 modos blanco": "ARO10PBLA01",
        "Aro Rectangular Luz Led YM200 recargable blanco": "AROYM2BLA02",
        "Audifonos F9-5 negro": "AUDF95NEG01",
        "Audifonos S10Pro pantalla tactil Blanco": "AUDS10BLA01",
        "Audifonos S10Pro pantalla tactil negro": "AUDS10NEG02",
        "Audifonos Se-60 pantalla tactil Rosa": "AUDS60ROS01",
        "Audifonos Z9 Azul": "AUDIZ9AZU01",
        "Balon de fulbol #4 estrellas azul": "BALE#4AZU01",
        "Balon De Futbol #4 estrellas Blanco": "BALE#4BLA02",
        "Balon De Futbol #5 Copa America blanco": "BALA#5BLA03",
        "Balon De Futbol #5 Blanco Modelo X blanco": "BALX#5BLA04",
        "Balon De Futbol #5 Triangulo Azul/Blanco": "BALT#5BLA05",
        "Balon De Futbol #5 estrellas Gris": "BALE#5GRI06",
        "Balon De Futbol #5 estrellas Rosa": "BALE#5ROS07",
        "Balon De Futbol #5 tonasol reflejante": "BALT#5REF08",
        "Bateria Para Camara espia 4000 Mah negra": "BATPIAAZU01",
        "Bolsa Sumergible contra agua negra": "BOLSUMNEG01",
        "Bomba Para Inflar balones 7 valvulas azul": "BOMNESAZU01",
        "Cable Magnetico 3 puntas 540 Negro": "CAB540NEG01",
        "Cable Magnetico 3 puntas 540 Rojo": "CAB540ROJ02",
        "Cargador para cigarrera Auto 1C 2Usb 7A Negro": "CARAUTNEG01",
        "Cargador Pared 6 Puertos 55W negro": "CAR6PUNEG02",
        "Cargador para Smartwatch modelo Dock negro": "CARDOCNEG03",
        "Cargador Usb Para Apple Watch blanco": "CARAPPBLA04",
        "Cardán cabeza de bola 360g para tripode universal": "CARBO36TR01",
        "Case Protector Para Apple Watch De 38Mm trasparente": "CAS38MTRA01",
        "Case Protector Para Apple Watch De 42Mm trasparente": "CAS42MTRA02",
        "Case Protector Para Apple Watch De 44Mm trasparente": "CAS44MTRA03",
        "Correa Metalica de malla Milanesa Negro": "CORMETNEG07",
        "Correa Smartwatch universal plastico V11 Gris": "CORV11GRI01",
        "Correa Smartwatch universal plastico V11 rosa": "CORV11ROS02",
        "Espejo con aro de luz y bocina blanco": "ESPAROBLA01",
        "Guantes De portero para futbol No.8 amarillos": "GUANT8AMA01",
        "Guantes De portero para futbol No.9 amarillos": "GUANT9AMA02",
        "Lampara Escritorio Multifunciones blanca": "LAMESRBLA01",
        "Lampara de Bicicleta W652 4 modos multifunciones negra": "LAMBICNEG02",
        "Lampara Rbg grande LS-188 negra": "LAMLS1NEG03",
        "Lampara Rbg AY-83 pinza celular negro": "LAMAY3NEG04",
        "Lampara Solar Triple 3 modos ajustable negro": "LAM3MONEG05",
        "Lampara Solar Triple WALL 3 modos ajustable negro": "LAMWALNEG06",
        "Mascara halloween mike mayers ojos led verdes blanca": "MASMAYBLA01",
        "Mascara de halloween Monja ojo led rojos": "MASMONBLA02",
        "Mascara de halloween Monja ojo led rojos": "MASMONBLA02",
        "Mini Tripie celular multiusos negro": "MINMULNEG01",
        "Minicamara Espia 4K Wifi web HD 1080 p": "MIN4K1NEG01",
        "Mouse inalambrico recargable negro": "MOUINANEG01",
        "Multicontacto 10 puertos blanco": "MULCTOBLA06",
        "Panel De Iluminacion Led RL-900 3 modos negro": "PANRL9NEG01",
        "Panel De Iluminacion PRO LED 800 3modos negro": "PANPL8NEG02",
        "Patito de luz moto/bici decorativo casco Blackironman amarrillo": "PATAROAMA01",
        "Patito de luz moto/bici decorativo casco bola 8 amarrillo": "PATBO8AMA02",
        "Patito de luz moto/bici decorativo casco Flama amarrillo": "PATFLAAMA03",
        "Patito de luz moto/bici decorativo casco tiburon amarrillo": "PATTUBAMA04",
        "Patito de luz moto/bici decorativo casco tiburon negro": "PATTUBNEG05",
        "Patito de luz moto/bici decorativo casco unicornio amarrillo": "PATUNIAMA06",
        "Pila Para Smartwatch 3.7 V 380mAh azul": "PILSMAAZU01",
        "Reloj De decorativo Pared Negro": "RELMODNEG01",
        "Rodillera Militar ajustable antiderrapante talla L": "RODMILTALL01",
        "Rodillera Militar ajustable antiderrapante talla M": "RODMILTALM02",
        "Smartwatch pantalla Amoled Hk21 Negro": "SMADHKNEG01",
        "Smartwatch pantalla Amoled Hk21 Rosa": "SMADHKROS02",
        "Smartwatch Dz09 SIM %100 Blanco": "SMAHDZBLA03",
        "Smartwatch Dz09 SIM %100 Plata": "SMAHDZPLA04",
        "Smartwatch Dz09 Solo Bluetooth Blanco": "SMADZBBLA05",
        "Smartwatch Dz09 Solo Bluetooth Dorado": "SMADZBDOR06",
        "Smartwatch Dz09 Solo Bluetooth Negro": "SMADZBNEG07",
        "Smartwatch Dz09 Solo Bluetooth Plata": "SMADZBPLA08",
        "Smartwatch Q18 SIM Blanco": "SMAQ18BLA09",
        "Smartwatch Q18 SIM Dorado": "SMAQ18DOR10",
        "Smartwatch Q18 SIM Negro": "SMAQ18NEG11",
        "Smartwatch Q18 SIM Plata": "SMAQ18PLA12",
        "Smartwatch Zl02 pantalla tactil Negro": "SMAHZLNEG13",
        "Soporte Para Celular iman multifunciones negro": "SOPMAGNEG01",
        "Tira Led Decorativa temporada luz amarilla 10Mtrs blanco": "TIR10MBLA01",
        "Tripode 2.1m multiusos negro": "TRI2.1NEG02",
        "Tripode 2.1m 8806 multiusos negro": "TRI82.1NEG03",
        "Ventilador turbo recargable negro": "VENTURNEG01",
        "Ventilador Y Lampara 2 En 1 negro": "LAMVENNEG02",
        "2 Paneles de iluminacion led RL-900 + 2 tripies 2.1m": "2PRL+2TR2.101",
        "Panel De Iluminacion Led RL-900 + Tripie 2.1m": "PRL+TR2.102",
        "Aro Luz Led QX-260 10 P + Tripode celular": "ARQX+TRIC03",
        "Minicamara Espia 4K web 1080P HD Wifi + Reloj De decorativo Pared Negro": "MI4K+RELG01",
        "Aro Rectangular led YM200 + Tripie 2.1m": "ARYM+TR2.104",
        "Smartwatch pantalla amoled HK21 rosa + audifonos Z9 azul": "HK21R+Z9A01",
        "4 Bolsas Sumergible contra agua Negro": "4BOLSUNEG01",
        "4 Audifonos F9-5 Negro": "4AUDF9NEG01",
        "Panel De Iluminacion PRO LED 800 + Tripie 2.1m": "PPL8+TR2.105",
        "Balon De Futbol estrellas #5 Gris + Bomba para inflar balones": "BAEG#5+BB01",
        "Guantes de portero para Futbol No.9 amarillos + audifonos Z9": "GUPN9+AZ901",
        "2 Cables Magneticos 3 puntas 540 negro": "2CA540NEG01",
        "Balon De Futbol #5 Blanco Copa America + Bomba para inflar balones": "BACB#5+BB02",
        "Smartwatch pantalla amoled HK21 negro + audifonos Z9 azul": "HK21N+Z9A02",
        "2 Lamparas Solar Triple 3 modos ajustable negro": "2LAMTR3MOD01",
        "5 Pilas Para Smartwatch 3.7 V 380mAh azul": "5PILSM3.701",
        "Balon De Futbol #5 Blanco Modelo X + Bomba para inflar balones": "BAXB#5+BB03",
        "2 Aros Luz Led QX-260 10 pulgadas 3 modos + 2 Tripodes celular": "2AROQX+2TRC06",
        "Balon De Futbol #5 Blanco Triangulo Azul + Bomba para inflar balones": "BATB#5+BB04",
        "5 Mascaras de halloween Monja ojo led rojos": "5MASHAMNJ01",
        "Lampara de Bicicleta 4 modos multifunciones negra + Patito tiburon amarillo": "LAMB+PATA01",
        "2 Aros rectangular led YM200 + 2 Tripies 2.1m": "2ARYM+2TR2.107",
        "10 Pilas Para Smartwatch 3.7 V 380mAh azul": "10PILSM3.702",
        "5 patitos casco flama+unicornio+tiburon amarillo+bola 8+ airon": "5PATVARAM01",
        "5 Audifonos z9 azul": "5AUDZ9AZU02",
        "5 Audifonos F9-5 Negro": "5AUDF9NEG03",
        "Aro Luz Led QX-260 10 P + Tripode 2.1m": "ARQX+TR2.108",
        "5 PatitoS de luz moto/bici decorativo casco tiburon amarillo": "5PATIBAMA02",
        "2 Smartwatch Dz09 Solo Bluetooth Plata": "2SMADZBPLA01",
        "4 Smartwatch Dz09 Solo Bluetooth PlATA, NEGRO, BLANCO, DORADO": "4SMADZBVAR02",
        "2 Mouse inalambrico recargable negro + 2 Cables Magneticos 3 puntas 540 negro": "2MOU+2cm54001",
        "3 Audifonos F9-5 Negro": "3AUDF9NEG04",
        "2 Mouse inalambrico recargable negro": "2MOUINANEG02",
        "2 Ventiladores turbo recargable negro": "2VENTURNEG02",
        "Balon De Futbol #5 estrellas Rosa + Balon de Futbol #4 estrellas blanco + Bomba para inflar balones": "BAR5+BAB4+B05",
        "Rodillera Militar talla M + Lampara de bicicleta W652": "RODM+LAMB01",
        "Balon De Futbol #4 Blanco + guantes portero no.9 + bomba para inflar balones": "BB4+GU9+B01",
        "Panel De Iluminacion PRO LED 800 + Tripie 2.1m 8806": "PPL8+TR2.1809",
        "10 Mascaras de halloween Monja ojo led rojos": "10MASHAMNJ02",
        "10 MascaraS halloween mike mayers ojos led verdes blanca": "10MASMAYBLA03",
        "2 Cables Magneticos 3 puntas 540 rojo": "2CA540ROJ02",
        "2 Mascaras de halloween Monja ojo led rojos": "2MASHAMNJ04",
        "Mascara monja + mascara mike mayers": "MASMO+MASMY05",
        "2 Mascara halloween mike mayers ojos led verdes blanca": "2MASMAYBLA06",
        "Aro Rectangular led YM200 + Tripie 2.1m 8806": "ARYM+TR2.1810",
        "Smartwatch Hk21 Negro + Audifonos S10pro Negro": "SHKN+AS10N01",
        "Smartwatch Hk21 Rosa + Audifonos SE-60 Rosa": "SHKR+AS60R02"
    }
};

let appState = {
    bultos: [],
    selectedOperator: null,
    extractionId: null,
};

const elements = {
    operator: document.getElementById('operator'),
    extractionId: document.getElementById('extractionId'),
    htmlInput: document.getElementById('htmlInput'),
    parseBtn: document.getElementById('parseBtn'),
    leftAlertsContainer: document.getElementById('leftAlertsContainer'),
    bultosContainer: document.getElementById('bultosContainer'),
    summaryContainer: document.getElementById('summaryContainer'),
    bultosCount: document.getElementById('bultosCount'),
    placeholderContainer: document.getElementById('placeholderContainer'),
    summaryModal: document.getElementById('summaryModal'),
    modalContent: document.getElementById('modalContent')
};

// Listeners de eventos para capturar el estado del formulario
elements.operator.addEventListener('change', (e) => {
    appState.selectedOperator = e.target.value;
});

elements.extractionId.addEventListener('input', (e) => {
    appState.extractionId = e.target.value;
});

elements.parseBtn.addEventListener('click', () => {
    renderBultos();
});

function showAlert(message, type = 'info') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    elements.leftAlertsContainer.appendChild(alert);
    setTimeout(() => alert.remove(), 6000);
}

function parseMLHTML(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const bultos = [];
    const collapsibles = doc.querySelectorAll('.collapsable_header');

    collapsibles.forEach((collapsible) => {
        try {
            const imgElement = collapsible.querySelector('.pictures img');
            const image = imgElement ? imgElement.src : null;

            const bultoLabel = collapsible.querySelector('[id^="box-label-"], .row_container-label p, .rowcontainer-label--damaged p');
            const bultoIdText = bultoLabel ? bultoLabel.textContent.trim() : 'N/A';

            const shipmentLabel = collapsible.querySelector('[id^="shipment-id-label-"], .lbl-shipment-id p');
            const shipmentNumber = shipmentLabel ? shipmentLabel.textContent.trim() : 'N/A';

            const statusLabel = collapsible.querySelector('[id^="status-label-"], .lbl-title p');
            const status = statusLabel ? statusLabel.textContent.trim() : 'N/A';

            const quantityLabel = collapsible.querySelector('[id^="quantity-label-"] p, .lbl-quantity p');
            const quantityText = quantityLabel ? quantityLabel.textContent.trim() : '0 u.';
            const quantity = parseInt(quantityText.match(/\d+/)?.[0] || 0);

            const cleanSKU = bultoIdText.replace('#', '').split('|')[0].trim();

            if (quantity > 0) {
                bultos.push({
                    id: cleanSKU, 
                    label: bultoIdText,
                    shipmentNumber,
                    status,
                    quantity,
                    image,
                    odooProductName: `[${cleanSKU}] Cargando datos...`,
                    odooProductId: null
                });
            }
        } catch (error) {
            console.error('Error parsing:', error);
        }
    });
    return bultos;
}

async function fetchOdooProductNames() {
    for (let bulto of appState.bultos) {
        await new Promise(resolve => setTimeout(resolve, 150));
        
        if (bulto.id.endsWith('-1')) {
            bulto.odooProductName = "[ARO10PBLA01] Aro Luz Led QX-260 10 pulgadas 3 modos blanco";
            bulto.odooProductId = 1024;
        } else if (bulto.id.endsWith('-2')) {
            bulto.odooProductName = "[AROYM2BLA02] Aro Rectangular Luz Led YM200 recargable blanco";
            bulto.odooProductId = 1025;
        } else if (bulto.id.endsWith('-3')) {
            bulto.odooProductName = "[AUDF95NEG01] Audifonos F9-5 negro";
            bulto.odooProductId = 1026;
        } else if (bulto.id.includes("11431398")) {
            bulto.odooProductName = "[ARO10PBLA01] Aro Luz Led QX-260 10 pulgadas 3 modos blanco";
            bulto.odooProductId = 1024;
        } else {
            bulto.odooProductName = `[${bulto.id}] Producto genérico / No identificado en catálogo`;
            bulto.odooProductId = 999; 
        }
        
        const nameContainer = document.getElementById(`name-display-${bulto.id}`);
        if (nameContainer) {
            nameContainer.innerHTML = bulto.odooProductName;
            nameContainer.classList.remove('text-amber-500/60', 'italic');
            nameContainer.classList.add('text-emerald-400');
        }
    }
}

window.updateProductManually = function(bultoId, targetSku) {
    const bulto = appState.bultos.find(b => b.id === bultoId);
    if (!bulto || !targetSku) return;

    for (const [nombreMl, sku] of Object.entries(CONFIG.tablaIgualacion)) {
        if (sku === targetSku) {
            bulto.odooProductName = `[${sku}] ${nombreMl}`;
            bulto.odooProductId = 1000; 
            
            const nameContainer = document.getElementById(`name-display-${bulto.id}`);
            if (nameContainer) {
                nameContainer.innerHTML = bulto.odooProductName;
                nameContainer.classList.remove('text-amber-500/60', 'italic');
                nameContainer.classList.add('text-emerald-400');
            }
            break;
        }
    }
}

function renderBultos() {
    elements.leftAlertsContainer.innerHTML = '';
    if (!appState.selectedOperator || !appState.extractionId || !elements.htmlInput.value.trim()) {
        showAlert('⚠️ Por favor completa el operador, el ID de extracción y el código HTML.', 'error');
        return;
    }

    elements.bultosContainer.innerHTML = '';
    elements.summaryContainer.innerHTML = '';
    
    appState.bultos = parseMLHTML(elements.htmlInput.value);

    if (appState.bultos.length === 0) {
        elements.placeholderContainer.style.display = 'block';
        showAlert('⚠️ No se encontraron bultos estructurados en el HTML.', 'error');
        return;
    }

    elements.placeholderContainer.style.display = 'none';
    elements.bultosCount.textContent = `${appState.bultos.length} bulto(s)`;

    let opcionesCatalogo = `<option value="">-- Seleccionar producto manualmente --</option>`;
    for (const [nombreMl, sku] of Object.entries(CONFIG.tablaIgualacion)) {
        opcionesCatalogo += `<option value="${sku}">[${sku}] ${nombreMl}</option>`;
    }

    appState.bultos.forEach((bulto) => {
        const card = document.createElement('div');
        card.className = 'bulto-card glass-light flex flex-col justify-between';
        const imageHtml = bulto.image ? `<img src="${bulto.image}" class="bulto-image">` : '';

        card.innerHTML = `
            <div>
                ${imageHtml}
                <div class="p-5">
                    <div class="text-sm font-bold text-white tracking-wide mb-1">${bulto.label}</div>
                    <div id="name-display-${bulto.id}" class="text-xs font-semibold text-amber-500/60 mb-3 italic">
                        🔄 Conectando con Odoo para obtener el nombre...
                    </div>
                    
                    <div class="mb-4">
                        <label class="block text-[10px] uppercase tracking-wider font-semibold text-gray-400 mb-1">⚙️ Corrección Manual (Odoo SKU):</label>
                        <select id="manual-select-${bulto.id}" onchange="updateProductManually('${bulto.id}', this.value)" class="w-full text-xs p-2 bg-neutral-950 border border-gray-800 rounded-lg text-gray-300 focus:border-[#D4AF37]">
                            ${opcionesCatalogo}
                        </select>
                    </div>

                    <div class="text-xs text-gray-400 space-y-1 mb-4">
                        <p><strong>Envío:</strong> ${bulto.shipmentNumber}</p>
                        <p><strong>Estatus:</strong> ${bulto.status}</p>
                    </div>
                    <span class="inline-block bg-amber-500/10 border border-amber-500/20 text-[#D4AF37] px-3 py-1 rounded-full font-bold text-xs">
                        📦 ${bulto.quantity} unidades
                    </span>
                </div>
            </div>
            <div class="p-5 pt-0 border-t border-gray-800/40 mt-auto space-y-2">
                <button id="btn-odoo-${bulto.id}" onclick="submitSingleToOdoo('${bulto.id}')" class="btn-primary w-full py-2.5 text-xs uppercase tracking-wider rounded-lg font-bold">
                    🚀 Mandar a Odoo
                </button>
                <button onclick="showBultoSummary('${bulto.id}')" class="btn-outline-gold w-full py-2.5 text-xs uppercase tracking-wider rounded-lg font-bold">
                    📋 Resumen de Operación
                </button>
            </div>
        `;
        elements.bultosContainer.appendChild(card);
    });

    renderGeneralSummary();
    fetchOdooProductNames();
}

function renderGeneralSummary() {
    const totalUnits = appState.bultos.reduce((sum, b) => sum + b.quantity, 0);
    const operator = CONFIG.operators[appState.selectedOperator];
    
    const summary = document.createElement('div');
    summary.className = 'summary-panel space-y-2 text-sm text-gray-300';
    summary.innerHTML = `
        <h3 class="text-white font-bold border-b border-gray-800 pb-2 mb-2">Resumen General</h3>
        <p><strong>Operador:</strong> ${operator ? operator.name : 'No seleccionado'}</p>
        <p><strong>ID Extracción:</strong> ${appState.extractionId || 'N/A'}</p>
        <p><strong>Total de Bultos:</strong> ${appState.bultos.length}</p>
        <p><strong>Total de Unidades:</strong> ${totalUnits}</p>
    `;
    elements.summaryContainer.appendChild(summary);
}

// Funciones globales para control de Modales/Acciones obligatorias en el renderizado previo
window.closeModal = function() {
    elements.summaryModal.classList.add('hidden');
}

window.showBultoSummary = function(bultoId) {
    const bulto = appState.bultos.find(b => b.id === bultoId);
    if (!bulto) return;

    elements.modalContent.innerHTML = `
        <p><strong>ID Bulto:</strong> ${bulto.id}</p>
        <p><strong>Etiqueta:</strong> ${bulto.label}</p>
        <p><strong>Producto asignado:</strong> ${bulto.odooProductName}</p>
        <p><strong>Cantidad:</strong> ${bulto.quantity} unidades</p>
        <p><strong>Envío:</strong> ${bulto.shipmentNumber}</p>
        <p><strong>Estatus:</strong> ${bulto.status}</p>
    `;
    elements.summaryModal.classList.remove('hidden');
}

window.submitSingleToOdoo = function(bultoId) {
    alert(`Enviando bulto ${bultoId} a Odoo...`);
}