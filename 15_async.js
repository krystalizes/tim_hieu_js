// giúp làm gọn mã, giúp hàm async hoạt động đồng bộ, nhưng cắc tác vụ bên ngoài hàm async vẫn là bất đồng bộ
async function fetchUserData(userId) {
    try {
        // Tạm dừng cho đến khi fetch hoàn thành
        let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');       
        // Nếu fetch thất bại, ném lỗi
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Tạm dừng cho đến khi response.json() hoàn thành
        let user = await response.json(); 
        // Sử dụng dữ liệu người dùng
        console.log(user);
    } catch (error) {
        // Bắt và xử lý lỗi
        console.error('There has been a problem with your fetch operation:', error);
    }
}
fetchUserData(1);
