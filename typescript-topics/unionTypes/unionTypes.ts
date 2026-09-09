let userId: string | number;

userId = 1234;
userId = "usid_1234";

function getUserId(userId: string | number): string | number {
  return userId;
}

console.log(getUserId("usid_1234"));
console.log(getUserId(1234));