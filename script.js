function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}
document.getElementById('sidebarToggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('open');
});
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('sidebarToggle');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('closed');
});
