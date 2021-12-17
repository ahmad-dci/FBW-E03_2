export const getRooms = async () => {
    const response = await fetch('/getrooms', {
        method: 'POST',
    })
    const data = await response.json()
    return data;
}