javascript: (function() {
    var isMinimized = false;
    var injectorMenu = document.createElement('div');
    injectorMenu.id = 'ZenJector';
    injectorMenu.style.position = 'absolute';
    injectorMenu.style.top = '50px';
    injectorMenu.style.left = '50px';
    injectorMenu.style.background = '#1a1a1a';
    injectorMenu.style.color = '#008F11';
    injectorMenu.style.border = '1px solid #999';
    injectorMenu.style.padding = '10px';
    injectorMenu.style.zIndex = '9999';
    injectorMenu.style.fontFamily = 'Roboto, sans-serif';
    injectorMenu.style.userSelect = 'none';
    injectorMenu.innerHTML = '<h3>ZenJector - yaz.fr</h3><textarea id="jsCode" rows="4" cols="50" placeholder="Enter JavaScript code" style="background: #333; color: #f2f2f2; border: 1px solid #999;"></textarea><br><button id="injectCustomJS" style="background: #333; color: #f2f2f2; border: 1px solid #999;">Inject JS</button>';
    document.body.appendChild(injectorMenu);
    document.getElementById('injectCustomJS').addEventListener('click', function() {
        var jsCode = document.getElementById('jsCode').value;
        eval(jsCode);
    });
    var isDragging = false;
    var offsetX, offsetY;
    injectorMenu.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - injectorMenu.getBoundingClientRect().left;
        offsetY = e.clientY - injectorMenu.getBoundingClientRect().top;
    });
    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            injectorMenu.style.left = e.clientX - offsetX + 'px';
            injectorMenu.style.top = e.clientY - offsetY + 'px';
        }
    });
    document.addEventListener('mouseup', function() {
        isDragging = false;
    })
})();
