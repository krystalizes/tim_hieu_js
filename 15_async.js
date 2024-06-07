// giúp làm gọn mã, giúp hàm async hoạt động đồng bộ, nhưng cắc tác vụ bên ngoài hàm async vẫn là bất đồng bộ
(async function fetchUserData() {
    try {
        // Tạm dừng cho đến khi fetch hoàn thành
        let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Tạm dừng cho đến khi response.json() hoàn thành
        let user = await response.json(); 
        console.log(user);
    } catch (error) {
        console.error('error: ', error);
    }
}());

