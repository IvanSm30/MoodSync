from database import User, new_session


async def add_user(name, password) -> int:
    async with new_session() as session:
        new_task = User(name=name, password=password)
        session.add(new_task)
        await session.flush()
        await session.commit()
        return new_task.id
