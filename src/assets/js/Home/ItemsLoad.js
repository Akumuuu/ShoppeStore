import { loadProductsHome, heartLogic } from './Body';
document.addEventListener('DOMContentLoaded', function () {
    // ��������, �� �� �� ������� "Product"
    if (window.location.pathname.includes('/')) {
        loadProductsHome();
        heartLogic();
    }
})