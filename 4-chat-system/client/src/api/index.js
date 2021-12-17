export const getRooms = async () => {
    const response = await fetch('/getrooms')
    const data = await response.json()
    return data;
}