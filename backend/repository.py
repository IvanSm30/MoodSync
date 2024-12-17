from database import User, new_session


async def add_user(user_data: dict) -> int:
    async with new_session() as session:
        new_user = User(user_data)
        session.add(new_user)
        await session.flush()
        await session.commit()
        return new_user.id
