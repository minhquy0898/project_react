import React from 'react'
import './DropDown.css'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className='SortContainer'>
            <Menu as="div" className="relative inline-block text-left w-42">
                <div className='SortContainer'>
                    <Menu.Button className="inline-flex w-full justify-start gap-x-10 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Sắp xếp
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <p
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Mặc định
                                    </p>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <p
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        A-Z
                                    </p>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <p
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Z-A
                                    </p>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <p
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Giá tăng dần
                                    </p>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <p
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Giá giảm dần
                                    </p>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <p
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Hàng mới nhất
                                    </p>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <p
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Hàng cũ nhất
                                    </p>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <div className='title'>
                <p>Hiển thị 1 - 18 trong tổng số 22 sản phẩm</p>
            </div>
        </div>
    )
}