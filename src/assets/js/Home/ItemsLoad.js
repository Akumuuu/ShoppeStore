import { loadProductsHome } from './Body';
document.addEventListener('DOMContentLoaded', function () {
    // ��������, �� �� �� ������� "Product"
    if (window.location.pathname.includes('/index')) {
        loadProductsHome();
    }
})