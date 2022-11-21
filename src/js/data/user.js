import { faker } from "@faker-js/faker";

const avatar = faker.image.avatar();
const name = faker.name.firstName();
const email = faker.internet.email();
const userId = faker.datatype.uuid();
const birthdate = faker.date.birthdate();
const vehicle = faker.vehicle.vehicle();

const profile = {
    avatar,
    name,
    email,
    userId,
    birthdate,
    vehicle,
};

export default profile;
