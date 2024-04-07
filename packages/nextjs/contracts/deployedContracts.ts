/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  devnet: {
    HelloStarknet: {
      address:
        "0x0739258a1891b30fbee34ba0b984acc3f55bc19f63e99c96b1a88606383dd322",
      abi: [
        {
          type: "impl",
          name: "HelloStarknetImpl",
          interface_name: "contracts::helloStarknet::IHelloStarknet",
        },
        {
          type: "interface",
          name: "contracts::helloStarknet::IHelloStarknet",
          items: [
            {
              type: "function",
              name: "increase_balance",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u32",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_balance",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u32",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_balance_increment",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u32",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u32",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::helloStarknet::HelloStarknet::Event",
          kind: "enum",
          variants: [],
        },
      ],
    },
  },
  mainnet: {
    HelloStarknet: {
      address:
        "0x0750aa622d77436d69d58c91dbc73a6d0d25db0b7076c1377cdda15e13fd632b",
      abi: [
        {
          type: "impl",
          name: "HelloStarknetImpl",
          interface_name: "contracts::helloStarknet::IHelloStarknet",
        },
        {
          type: "interface",
          name: "contracts::helloStarknet::IHelloStarknet",
          items: [
            {
              type: "function",
              name: "increase_balance",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u32",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_balance",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u32",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_balance_increment",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u32",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u32",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::helloStarknet::HelloStarknet::Event",
          kind: "enum",
          variants: [],
        },
      ],
    },
  },
  sepolia: {
    HelloStarknet: {
      address:
        "0x009329408104badc53c6338ba88966a565bf97268a9ac43114f395114c4b4b91",
      abi: [
        {
          type: "impl",
          name: "HelloStarknetImpl",
          interface_name: "contracts::helloStarknet::IHelloStarknet",
        },
        {
          type: "interface",
          name: "contracts::helloStarknet::IHelloStarknet",
          items: [
            {
              type: "function",
              name: "increase_balance",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u32",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_balance",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u32",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_balance_increment",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u32",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u32",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::helloStarknet::HelloStarknet::Event",
          kind: "enum",
          variants: [],
        },
      ],
    },
    SimpleStorage: {
      address:
        "0x002c20a4ee6eee7c976e3e71c4217871c7c629c5b3d8b2d03ca151512894f5af",
      abi: [
        {
          type: "impl",
          name: "SimpleStorageImpl",
          interface_name: "contracts::simpleStorage::ISimpleStorage",
        },
        {
          type: "interface",
          name: "contracts::simpleStorage::ISimpleStorage",
          items: [
            {
              type: "function",
              name: "get_name",
              inputs: [],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "set_name",
              inputs: [
                {
                  name: "name",
                  type: "core::felt252",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "name",
              type: "core::felt252",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::simpleStorage::SimpleStorage::Event",
          kind: "enum",
          variants: [],
        },
      ],
    },
    Vote: {
      address:
        "0x04c394c4fc87a9a62f04205ac456f6811b6bcb0465e339f95308332cbff7364f",
      abi: [
        {
          type: "impl",
          name: "VoteImpl",
          interface_name: "contracts::vote::VoteTrait",
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::vote::VoteTrait",
          items: [
            {
              type: "function",
              name: "get_vote_status",
              inputs: [],
              outputs: [
                {
                  type: "(core::integer::u8, core::integer::u8, core::integer::u8, core::integer::u8)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "voter_can_vote",
              inputs: [
                {
                  name: "user_address",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "is_voter_registered",
              inputs: [
                {
                  name: "address",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "vote",
              inputs: [
                {
                  name: "vote",
                  type: "core::integer::u8",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "voter_1",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "voter_2",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "voter_3",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::vote::Vote::VoteCast",
          kind: "struct",
          members: [
            {
              name: "voter",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "vote",
              type: "core::integer::u8",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::vote::Vote::UnauthorizedAttempt",
          kind: "struct",
          members: [
            {
              name: "unauthorized_address",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::vote::Vote::Event",
          kind: "enum",
          variants: [
            {
              name: "VoteCast",
              type: "contracts::vote::Vote::VoteCast",
              kind: "nested",
            },
            {
              name: "UnauthorizedAttempt",
              type: "contracts::vote::Vote::UnauthorizedAttempt",
              kind: "nested",
            },
          ],
        },
      ],
    },
    Ownable: {
      address:
        "0x07b0a115eb4111e34607418ff37015e8f60149541d3af39b094d19eea2ec5ad4",
      abi: [
        {
          type: "impl",
          name: "OwnableDataImpl",
          interface_name: "contracts::IData",
        },
        {
          type: "interface",
          name: "contracts::IData",
          items: [
            {
              type: "function",
              name: "get_data",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u64",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "set_data",
              inputs: [
                {
                  name: "new_value",
                  type: "core::integer::u64",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "impl",
          name: "OwnableImpl",
          interface_name: "contracts::IOwnable",
        },
        {
          type: "interface",
          name: "contracts::IOwnable",
          items: [
            {
              type: "function",
              name: "transfer_ownership",
              inputs: [
                {
                  name: "new_owner",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "initial_owner",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::ownable_component::OwnershipTransferred",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::ownable_component::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnershipTransferred",
              type: "contracts::ownable_component::OwnershipTransferred",
              kind: "nested",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Ownable::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnableEvent",
              type: "contracts::ownable_component::Event",
              kind: "nested",
            },
          ],
        },
      ],
    },
  },
} as const;

export default deployedContracts;