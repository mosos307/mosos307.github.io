lucide.createIcons(); // Activar iconos

let urlBase = "";
const sonido = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.wav");

// Función para ajustar el tamaño del textarea automáticamente
function ajustarTextarea(textarea) {
  textarea.style.height = 'auto';  // Resetea la altura
  textarea.style.height = textarea.scrollHeight + 'px';  // Ajusta la altura según el contenido
}

// Función modificada para ajustarse al contenido
function copiarUrl() {
  const urlFinal = document.getElementById('urlFinal');
  if (!urlFinal.value) {
    alert("No hay URL final para copiar.");
    return;
  }

  // Ajustar el tamaño del textarea de la URL final
  ajustarTextarea(urlFinal);

  urlFinal.select();
  document.execCommand('copy');
  
  // Reproducir sonido de confirmación
  sonido.currentTime = 0; // Reiniciar sonido
  sonido.play().catch(e => {
    console.log("No se pudo reproducir el sonido:", e);
  });

  const btn = document.getElementById('copiarBtn');
  btn.classList.add('copiado');
  setTimeout(() => btn.classList.remove('copiado'), 1000);

  mostrarNotificacion();
}

// Función que ajusta el tamaño del textarea al pegar la URL
document.getElementById('urlInput').addEventListener('input', function() {
  ajustarTextarea(this);
});

// También ajustamos el textarea de la nueva URL cuando se genera
function obtenerNuevaUrl() {
  const url = document.getElementById('urlInput').value.trim();
  const periodo = document.getElementById('periodoSelect').value;

  if (!url) {
    alert("Pega una URL primero.");
    return;
  }

  try {
    const urlObj = new URL(url);
    const enc = urlObj.searchParams.get("enc");

    if (!enc) {
      alert("No se encontró el parámetro 'enc' en la URL.");
      return;
    }

    let decoded = atob(enc);
    decoded = decodeURIComponent(decoded);
    decoded = decoded.replace(/s:14:"periodo_codigo";s:1:"\d";/, `s:14:"periodo_codigo";s:1:"${periodo}";`);

    let encoded = encodeURIComponent(decoded);
    encoded = btoa(encoded);

    urlObj.searchParams.delete('enc');
    urlBase = urlObj.origin + urlObj.pathname + "?" + urlObj.searchParams.toString();
    const nuevaUrl = urlBase + "&formato=Comfandi_Informe_Descriptivo_Valorativo&enc=" + encoded;

    document.getElementById('urlFinal').value = nuevaUrl;

    // Ajustar el tamaño del textarea de la nueva URL generada
    ajustarTextarea(document.getElementById('urlFinal'));

  } catch (e) {
    alert("La URL no es válida.");
  }
}


function mostrarNotificacion() {
  const noti = document.createElement('div');
  noti.className = 'notificacion';
  noti.innerText = '✅ URL copiada exitosamente';
  document.body.appendChild(noti);

  setTimeout(() => {
    noti.classList.add('desaparecer');
    noti.addEventListener('transitionend', () => noti.remove());
  }, 2000);
}
