import { User } from './user.model';

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastUser;
};

// export const generateAdminId = async (): Promise<string> => {
//   // const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0');
//   // // let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
//   // incrementedId = `A-${incrementedId}`;
//   // return incrementedId;
// };
