import axios from 'axios';

const url = process.env.REACT_APP_HOST;
const FileDownload = require('js-file-download');

/** ----- PART API CALLS ----- */
export const getParts = async (name = '') => {
    const {data} = await axios.request({
        method: 'GET',
        url: `${url}/Parts`,
        params: {
            name: name,
        },
    });
    return data;
};

export const updatePart = async (partData) => {
    console.log(partData);
    const {data} = await axios.patch(`${url}/Parts/${partData.partID}`, partData);
    return data;
};

export const deletePart = async (partID) => {
    const {data} = await axios.delete(`${url}/Parts/${partID}`);
    return data;
};

export const createPart = async (partData) => {
    const {data} = await axios.post(`${url}/Parts`, partData);
    return data;
};

/** ----- PART API CALLS END ----- */

/** ----- CONTAINER API CALLS ----- */
export const getContainers = async (name = '') => {
    const {data} = await axios.request({
        method: 'GET',
        url: `${url}/Containers`,
        params: {
            name: name,
        },
    });
    return data;
};

export const updateContainer = async (containerData) => {
    const {data} = await axios.patch(`${url}/Containers/${containerData.containerID}`, containerData);
    return data;
};

export const deleteContainer = async (containerID) => {
    const {data} = await axios.delete(`${url}/Containers/${containerID}`);
    return data;
};

export const createContainer = async (containerData) => {
    const {data} = await axios.post(`${url}/Containers`, containerData);
    return data;
};
/** ----- CONTAINER API CALLS END ----- */

/** ----- CONTAINED BY API CALLS ----- */
export const getContainedBy = async (name) => {
    const {data} = await axios.request({
        method: 'GET',
        url: `${url}/Parts/Containers`,
        params: {
            containerName: name,
        },
    });
    return data;
};

export const getContainedByIDs = async (partID, containerID) => {
    const {data} = await axios.request({
        method: 'GET',
        url: `${url}/Parts/Containers`,
        params: {
            partID: partID,
            containerID: containerID,
        },
    });
    return data[0];
};

export const updateContainedBy = async (partContainerData) => {
    const {data} = await axios.patch(`${url}/Parts/${partContainerData.partID}/Containers/${partContainerData.containerID}`, partContainerData);
    return data;
};

export const deleteContainedBy = async (partContainerData) => {
    const {data} = await axios.delete(`${url}/Parts/${partContainerData.partID}/Containers/${partContainerData.containerID}`);
    return data;
};

export const createContainedBy = async (partContainerData) => {
    console.log(partContainerData);
    const {data} = await axios.post(`${url}/Parts/${partContainerData.partID}/Containers/${partContainerData.containerID}`, partContainerData);
    return data;
};

/** ----- CONTAINED BY API CALLS END ----- */

/** ----- CATEGORIES API CALL ----- */
export const getCategories = async () => {
    const {data} = await axios.get(`${url}/Categories`);
    return data;
};

export const createCategory = async (categoryData) => {
    const {data} = await axios.post(`${url}/Categories`, categoryData);
    return data;
};

export const updateCategory = async (categoryData) => {
    const {data} = await axios.patch(`${url}/Categories/${categoryData.categoryID}`, categoryData);
    return data;
};

export const deleteCategory = async (categoryId) => {
    const {data} = await axios.delete(`${url}/Categories/${categoryId}`);
    return data;
};

export const createCategorizedBy = async (partID, categoryID) => {
    try {
        const {data} = await axios.post(`${url}/Categorized/Category/${categoryID}/Parts/${partID}`);
        return data;
    } catch (err) {
        console.log(err.message + ': Specified category already used');
    }
};

export const removeCategorizedBy = async (partID, categoryID) => {
    try {
        const {data} = await axios.delete(`${url}/Categorized/Category/${categoryID}/Parts/${partID}`);
        return data;
    } catch (err) {
        console.log(err.message + ': Part does not have specified category');
    }
};

/** ----- CATEGORIES API CALLS END ----- */
/** ----- EXPORT API CALL ----- */
export const exportData = async () => {
    const {data} = await axios.request({
        method: 'GET',
        url: `${url}/Export`,
        responseType: 'blob',
    });


    FileDownload(data, `Backup-${new Date().toLocaleString()}.csv`);
};
/** ----- EXPORT API CALL END ----- */
